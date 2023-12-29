import {Option, Select} from '@mui/joy'
import {ICategory} from '../model/interfaces/ICategory.ts'
import {ArrowSelect} from './ArrowSelect.tsx'

type TSelectChangeProp = Parameters<typeof Select>[0]['onChange']

export interface ICategorySelectProps {
	onChange: (category: ICategory) => void
	categoryArray: ICategory[]
	category: ICategory | null
}

export const CategorySelect = ({onChange, categoryArray, category}: ICategorySelectProps) => {
	const onSelectChange: TSelectChangeProp = (
		(_event, value) => {
			const category = categoryArray.find(category => category.uuid === value)
			if (category) {
				onChange(category)
			}
		}
	)
	return (
		<ArrowSelect placeholder='Выберите категорию' onChange={onSelectChange} value={category?.uuid ?? null}>
			{
				categoryArray.map(
					(category, index) => (
						<Option key={index} value={category.uuid}>
							{category.title}
						</Option>
					)
				)
			}
		</ArrowSelect>
	)
}