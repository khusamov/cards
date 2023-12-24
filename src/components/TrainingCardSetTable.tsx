import {Table} from '@mui/joy'
import {useState} from 'react'
import {ITableCheckboxContextValue, TableCheckboxContextProvider} from '../context/tableCheckboxContext.ts'
import {CardDeck} from '../model/CardDeck.ts'
import {BodyCheckbox} from './tableCheckbox/BodyCheckbox.tsx'
import {HeaderCheckbox} from './tableCheckbox/HeaderCheckbox.tsx'

// TODO Таблицу доделать по образцу:
// https://mui.com/joy-ui/react-table/#sort-and-selection

interface ITrainingCardSetTableProps {
	trainingCardSets: CardDeck[]
}

export const TrainingCardSetTable = ({trainingCardSets}: ITrainingCardSetTableProps) => {
	const [selectedKeyArray, setSelectedKeyArray] = useState<Set<number>>(new Set)
	const tableCheckboxContextValue: ITableCheckboxContextValue = {
		totalKeySet: new Set(trainingCardSets.map((_, index) => index)),
		selectedKeySet: selectedKeyArray,
		onSelectionChange: selectedKeySet => {
			setSelectedKeyArray(selectedKeySet)
		}
	}
	return (
		<TableCheckboxContextProvider value={tableCheckboxContextValue}>
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
						trainingCardSets.map(
							(cardSet, index) => (
								<tr key={index}>
									<td><BodyCheckbox id={index}/></td>
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
		</TableCheckboxContextProvider>
	)
}