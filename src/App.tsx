import {observer} from 'mobx-react-lite'
import {ChangeEventHandler, useState} from 'react'
import {Box, Button, CssBaseline, CssVarsProvider, Grid, Input, Stack, Typography} from '@mui/joy'
import './App.scss'
import {TrainingCardSetTable} from './components/TrainingCardSetTable.tsx'
import {ApplicationTrainingCardsModel} from './model/ApplicationTrainingCardsModel.ts'
import {TrainingCardSetModel} from './model/TrainingCardSetModel.ts'

interface IApplicationProps {
	applicationModel: ApplicationTrainingCardsModel
}

export const App = observer(
	({applicationModel}: IApplicationProps) => {
		const [title, setTitle] = useState<string | null>(null)

		const onTitleInputChange: ChangeEventHandler<HTMLInputElement> = event => {
			const rawValue = event.target.value.trim()
			const value = rawValue === '' ? null : rawValue
			setTitle(value)
		}

		const onAddNewCardSetButtonClick = () => {
			if (title !== null) {
				const trainingCardSet = new TrainingCardSetModel
				trainingCardSet.title = title
				applicationModel.pushTrainingCardSet(trainingCardSet)
				setTitle(null)
			}
		}

		return (
			<CssVarsProvider>
				<CssBaseline/>
				<Box padding={2}>
					<Grid container spacing={2}>
						<Grid xs={2}>
							<Stack direction='column' spacing={2}>
								<Typography level='body-lg'>Новый набор карточек</Typography>
								<Input placeholder='Название набора карточек' value={title ?? ''} onChange={onTitleInputChange}/>
								<Box>
									<Button disabled={title === null} onClick={onAddNewCardSetButtonClick}>Добавить новый набор карточек</Button>
								</Box>
							</Stack>
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