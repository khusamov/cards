import {Box, Button, Input, Stack, Typography} from '@mui/joy'
import {ChangeEventHandler, useState} from 'react'
import {ICategory} from '../model/interfaces/ICategory.ts'
import {CategorySelect} from './CategorySelect.tsx'

export interface ICardDeckFormData {
	title: string
	category: ICategory
}

interface ICardDeckFormProps {
	data?: ICardDeckFormData
	categoryArray: ICategory[]
	onSubmit: (data: ICardDeckFormData) => void
}

export const CardDeckForm = ({data, categoryArray, onSubmit}: ICardDeckFormProps) => {
	const [title, setTitle] = useState<string>(data?.title ?? '')
	const [category, setCategory] = useState<ICategory | null>(data?.category ?? null)

	const isValid = title && category

	const onTitleInputChange: ChangeEventHandler<HTMLInputElement> = event => {
		setTitle(event.target.value.trim())
	}

	const onCategorySelectChange = (category: ICategory) => {
		setCategory(category)
	}

	const onSubmitButtonClick = () => {
		if (isValid) {
			onSubmit({title, category})
		}
	}

	const formTitle = data ? `Колода: ${title}` : 'Новая колода карточек'
	const submitButtonTitle = data ? 'Обновить' : 'Добавить'

	return (
		<Stack direction='column' spacing={2}>
			<Typography level='body-lg'>{formTitle}</Typography>
			<CategorySelect category={category} onChange={onCategorySelectChange} categoryArray={categoryArray}/>
			<Input placeholder='Название колоды карточек' value={title} onChange={onTitleInputChange}/>
			<Box>
				<Button disabled={!isValid} onClick={onSubmitButtonClick}>
					{submitButtonTitle}
				</Button>
			</Box>
		</Stack>
	)
}