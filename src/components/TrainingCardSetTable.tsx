import {Checkbox, Table} from '@mui/joy'
import {CardDeck} from '../model/CardDeck.ts'

// TODO Таблицу доделать по образцу:
// https://mui.com/joy-ui/react-table/#sort-and-selection

interface ITrainingCardSetTableProps {
	trainingCardSets: CardDeck[]
}

export const TrainingCardSetTable = ({trainingCardSets}: ITrainingCardSetTableProps) => {
	return (
		<Table hoverRow sx={{'& thead th:nth-of-type(1)': {width: 40}, '--TableRow-hoverBackground': '#f3f3f3'}}>
			<thead>
				<tr>
					<th><Checkbox sx={{verticalAlign: 'sub'}}/></th>
					<th>№</th>
					<th>Категория</th>
					<th>Название</th>
					<th>Карточек в колоде</th>
				</tr>
			</thead>
			<tbody>
				{
					trainingCardSets.map(
						(cardSet, index) => (
							<tr key={index}>
								<td><Checkbox sx={{verticalAlign: 'sub'}}/></td>
								<td>{index + 1}</td>
								<td>Категория</td>
								<td>{cardSet.title}</td>
								<td>{cardSet.trainingCardArray.length > 0 && cardSet.trainingCardArray.length}</td>
							</tr>
						)
					)
				}
			</tbody>
		</Table>
	)
}