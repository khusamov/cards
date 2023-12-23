import {Option, Select} from '@mui/joy'
import type {SelectOwnProps} from '@mui/joy/Select/SelectProps'
import {ICategory} from '../model/interfaces/ICategory.ts'

interface ICategorySelectProps {
	onSelectChange: SelectOwnProps<string, false>['onChange']
	categoryArray: ICategory[]
}

export const CategorySelect = ({onSelectChange, categoryArray}: ICategorySelectProps) => {
	return (
		<Select placeholder='Выберите категорию' onChange={onSelectChange}>
			{
				categoryArray.map(
					(category, index) => (
						<Option key={index} value={category.uuid}>
							{category.title}
						</Option>
					)
				)
			}
		</Select>
	)
}