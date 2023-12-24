import DeleteIcon from '@mui/icons-material/Delete'
import {Box, Button, Sheet, Table, Typography} from '@mui/joy'
import {useState} from 'react'
import {ITableCheckboxContextValue, TableCheckboxContextProvider} from '../context/tableCheckboxContext.ts'
import {CardDeck} from '../model/CardDeck.ts'
import {BodyCheckbox} from './tableCheckbox/BodyCheckbox.tsx'
import {HeaderCheckbox} from './tableCheckbox/HeaderCheckbox.tsx'

interface ITrainingCardSetTableProps {
	trainingCardDeckArray: CardDeck[]
}

export const TrainingCardSetTable = ({trainingCardDeckArray}: ITrainingCardSetTableProps) => {
	const [selectedKeyArray, setSelectedKeyArray] = useState<Set<number>>(new Set)
	const tableCheckboxContextValue: ITableCheckboxContextValue = {
		totalKeySet: new Set(trainingCardDeckArray.map((_, index) => index)),
		selectedKeySet: selectedKeyArray,
		onSelectionChange: selectedKeySet => {
			setSelectedKeyArray(selectedKeySet)
		}
	}
	return (
		<TableCheckboxContextProvider value={tableCheckboxContextValue}>
			<Sheet variant='soft'>
				<Box sx={{display: 'flex', alignItems: 'center', p: 1}}>
					<Typography level='body-lg' sx={{flex: 1}}>
						Колоды карточек ({trainingCardDeckArray.length})
					</Typography>
					<Button startDecorator={<DeleteIcon/>} color='danger' disabled={selectedKeyArray.size <= 0}>
						Удалить
					</Button>
				</Box>
				<Table hoverRow sx={{'& thead th:nth-of-type(1)': {width: 40}, '--TableRow-hoverBackground': '#f3f3f3'}}>
					<thead>
						<tr>
							<th><HeaderCheckbox/></th>
							<th>№</th>
							<th>Категория</th>
							<th>Название</th>
							<th>Карточек в колоде</th>
						</tr>
					</thead>
					<tbody>
						{
							trainingCardDeckArray.map(
								(cardDeck, index) => (
									<tr key={index}>
										<td><BodyCheckbox id={index}/></td>
										<td>{index + 1}</td>
										<td>{cardDeck.category.title}</td>
										<td>{cardDeck.title}</td>
										<td>{cardDeck.trainingCardArray.length > 0 && cardDeck.trainingCardArray.length}</td>
									</tr>
								)
							)
						}
					</tbody>
				</Table>
			</Sheet>
		</TableCheckboxContextProvider>
	)
}