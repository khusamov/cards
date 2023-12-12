import {observer} from 'mobx-react-lite'
import {Box, CssBaseline, CssVarsProvider, Grid, Typography} from '@mui/joy'
import './App.scss'
import {FormAddingNewCardSet} from './components/FormAddingNewCardSet.tsx'
import {TrainingCardSetTable} from './components/TrainingCardSetTable.tsx'
import {ApplicationTrainingCardsModel} from './model/ApplicationTrainingCardsModel.ts'
import type {ITrainingCardSet} from './model/interfaces/ITrainingCardSet.ts'


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
				<Box padding={2}>
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
				</Box>
			</CssVarsProvider>
		)
	}
)