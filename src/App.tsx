import {observer} from 'mobx-react-lite'
import {Box, CssBaseline, CssVarsProvider, Grid, ListItemDecorator, Tab, TabList, TabPanel, Tabs, Typography} from '@mui/joy'
import './App.scss'
import {FormAddingNewCardSet} from './components/FormAddingNewCardSet.tsx'
import {TrainingCardSetTable} from './components/TrainingCardSetTable.tsx'
import {ApplicationTrainingCardsModel} from './model/ApplicationTrainingCardsModel.ts'
import type {ITrainingCardSet} from './model/interfaces/ITrainingCardSet.ts'
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize'
import CategoryIcon from '@mui/icons-material/Category'
import DescriptionIcon from '@mui/icons-material/Description'
import WidgetsIcon from '@mui/icons-material/Widgets'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import HelpCenterIcon from '@mui/icons-material/HelpCenter'
import {version, description} from '../package.json'

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
				<Tabs defaultValue='decks'>
					<TabList sx={{'--Icon-fontSize': '2rem'}}>
						<Tab orientation='vertical' value='files'>
							<ListItemDecorator>
								<DescriptionIcon/>
							</ListItemDecorator>
							Файлы
						</Tab>
						<Tab orientation='vertical' value='categories'>
							<ListItemDecorator>
								<CategoryIcon/>
							</ListItemDecorator>
							Категории
						</Tab>
						<Tab orientation='vertical' value='decks'>
							<ListItemDecorator>
								<WidgetsIcon/>
							</ListItemDecorator>
							Колоды
						</Tab>
						<Tab orientation='vertical' value='cards'>
							<ListItemDecorator>
								<DashboardCustomizeIcon/>
							</ListItemDecorator>
							Карточки
						</Tab>
						<Tab orientation='vertical' value='training'>
							<ListItemDecorator>
								<SportsEsportsIcon/>
							</ListItemDecorator>
							Тренировка
						</Tab>
						<Tab orientation='vertical' value='about'>
							<ListItemDecorator>
								<HelpCenterIcon/>
							</ListItemDecorator>
							О программе
						</Tab>
					</TabList>
					<Box>
						<TabPanel value='files'>

						</TabPanel>
						<TabPanel value='categories'>

						</TabPanel>
						<TabPanel value='decks'>
							<Grid container spacing={2}>
								<Grid xs={2}>
									<FormAddingNewCardSet onAddNewCardSet={onAddNewCardSet}/>
								</Grid>
								<Grid xs={10}>
									{
										applicationModel.trainingCardSets.length > 0 && (
											<Box>
												<Typography level='body-lg'>Колоды карточек ({applicationModel.trainingCardSets.length})</Typography>
												<TrainingCardSetTable trainingCardSets={applicationModel.trainingCardSets}/>
											</Box>
										)
									}
								</Grid>
							</Grid>
						</TabPanel>
						<TabPanel value='cards'>

						</TabPanel>
						<TabPanel value='training'>

						</TabPanel>
						<TabPanel value='about'>
							<div>Программа: {description}</div>
							<div>Версия программы: {version}</div>
						</TabPanel>
					</Box>
				</Tabs>
			</CssVarsProvider>
		)
	}
)