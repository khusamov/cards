import {Option, Select} from '@mui/joy'
import type {SelectOwnProps} from '@mui/joy/Select/SelectProps'
import {ICategory} from '../model/interfaces/ICategory.ts'

export interface ICategorySelectProps {
	onSelectChange: (category: ICategory) => void
	categoryArray: ICategory[]
	category: ICategory | null
}

export const CategorySelect = ({onSelectChange, categoryArray, category}: ICategorySelectProps) => {
	const onSelectChange1: SelectOwnProps<string, false>['onChange'] = (
		(_event, value) => {
			const category = categoryArray.find(category => category.uuid === value)
			if (category) {
				onSelectChange(category)
			}
		}
	)
	return (
		<Select placeholder='Выберите категорию' onChange={onSelectChange1} value={category?.uuid ?? null}>
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