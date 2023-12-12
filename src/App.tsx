import {observer} from 'mobx-react-lite'
import {ChangeEventHandler, useState} from 'react'
import {Box, Button, Checkbox, CssVarsProvider, Grid, Input, Stack, Table, Typography} from '@mui/joy'
import './App.scss'
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
									{
										// TODO Таблицу доделать по образцу:
										// https://mui.com/joy-ui/react-table/#sort-and-selection
									}
									<Table hoverRow sx={{'& thead th:nth-child(1)': {width: 25}}}>
										<thead>
											<tr>
												<th><Checkbox/></th>
												<th>№</th>
												<th>Название</th>
												<th>Категория</th>
											</tr>
										</thead>
										<tbody>
											{
												applicationModel.trainingCardSets.map(
													(cardSet, index) => (
														<tr key={index}>
															<td><Checkbox/></td>
															<td>{index + 1}</td>
															<td>{cardSet.title}</td>
															<td>fdsf</td>
														</tr>
													)
												)
											}
										</tbody>
									</Table>
								</Box>
							)
						}
					</Grid>
				</Grid>
			</CssVarsProvider>
		)
	}
)