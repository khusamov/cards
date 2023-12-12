import {Checkbox, Table} from '@mui/joy'
import {TrainingCardSetModel} from '../model/TrainingCardSetModel.ts'

// TODO Таблицу доделать по образцу:
// https://mui.com/joy-ui/react-table/#sort-and-selection

interface ITrainingCardSetTableProps {
	trainingCardSets: TrainingCardSetModel[]
}

export const TrainingCardSetTable = ({trainingCardSets}: ITrainingCardSetTableProps) => {
	return (
		<Table hoverRow sx={{'& thead th:nth-child(1)': {width: 40}, '--TableRow-hoverBackground': '#f3f3f3'}}>
			<thead>
				<tr>
					<th><Checkbox sx={{verticalAlign: 'sub'}}/></th>
					<th>№</th>
					<th>Название</th>
					<th>Категория</th>
				</tr>
			</thead>
			<tbody>
				{
					trainingCardSets.map(
						(cardSet, index) => (
							<tr key={index}>
								<td><Checkbox sx={{verticalAlign: 'sub'}}/></td>
								<td>{index + 1}</td>
								<td>{cardSet.title}</td>
								<td>fdsf</td>
							</tr>
						)
					)
				}
			</tbody>
		</Table>
	)
}