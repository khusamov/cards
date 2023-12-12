import {observer} from 'mobx-react-lite'
import {Box, CssBaseline, CssVarsProvider, Grid, ListItemDecorator, Tab, TabList, TabPanel, Tabs, Typography} from '@mui/joy'
import './App.scss'
import {FormAddingNewCardSet} from './components/FormAddingNewCardSet.tsx'
import {TrainingCardSetTable} from './components/TrainingCardSetTable.tsx'
import {ApplicationTrainingCardsModel} from './model/ApplicationTrainingCardsModel.ts'
import type {ITrainingCardSet} from './model/interfaces/ITrainingCardSet.ts'
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize'
import SportsHandballIcon from '@mui/icons-material/SportsHandball'

interface IApplicationProps {
	applicationModel: ApplicationTrainingCardsModel
}

export const App = observer(
	({applicationModel}: IApplicationProps) => {
		const onAddNewCardSet = (trainingCardSet: ITrainingCardSet) => {
			applicationModel.pushTrainingCardSet(trainingCardSet)
		}

		return (
			<CssVarsProvider>
				<CssBaseline/>
				<Tabs>
					<TabList sx={{'--Icon-fontSize': '2rem'}}>
						<Tab orientation='vertical'>
							<ListItemDecorator>
								<DashboardCustomizeIcon/>
							</ListItemDecorator>
							Карточки
						</Tab>
						<Tab orientation='vertical'>
							<ListItemDecorator>
								<SportsHandballIcon/>
							</ListItemDecorator>
							Тренировка
						</Tab>
					</TabList>
					<Box>
						<TabPanel value={0}>
							<Grid container spacing={2}>
								<Grid xs={2}>
									<FormAddingNewCardSet onAddNewCardSet={onAddNewCardSet}/>
								</Grid>
								<Grid xs={10}>
									{
										applicationModel.trainingCardSets.length > 0 && (
											<Box>
												<Typography level='body-lg'>Наборы карточек ({applicationModel.trainingCardSets.length})</Typography>
												<TrainingCardSetTable trainingCardSets={applicationModel.trainingCardSets}/>
											</Box>
										)
									}
								</Grid>
							</Grid>
						</TabPanel>
						<TabPanel value={1}>

						</TabPanel>
					</Box>
				</Tabs>
			</CssVarsProvider>
		)
	}
)