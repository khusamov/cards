import {Box, Button, Input, Stack, Typography} from '@mui/joy'
import {ChangeEventHandler, useState} from 'react'
import type {ICardDeck} from '../model/interfaces/ICardDeck.ts'
import {CardDeck} from '../model/CardDeck.ts'
import {ITrainingFile} from '../model/interfaces/ITrainingFile.ts'
import {CategorySelect, TOnCategorySelectChangeFunction} from './CategorySelect.tsx'

interface IFormAddingNewCardSetProps {
	onAddNewCardSet: (trainingCardSet: ICardDeck) => void
	trainingFile: ITrainingFile
}

export const FormAddingNewCardSet = ({onAddNewCardSet, trainingFile}: IFormAddingNewCardSetProps) => {
	const [title, setTitle] = useState<string | null>(null)

	const onTitleInputChange: ChangeEventHandler<HTMLInputElement> = event => {
		const rawValue = event.target.value.trim()
		const value = rawValue === '' ? null : rawValue
		setTitle(value)
	}

	const onAddNewCardSetButtonClick = () => {
		if (title !== null) {
			const trainingCardSet = new CardDeck
			trainingCardSet.title = title
			onAddNewCardSet(trainingCardSet)
			setTitle(null)
		}
	}

	const onCardCategorySelectChange: TOnCategorySelectChangeFunction = (
		(_, value) => {
			console.log(value)
		}
	)

	return (
		<Stack direction='column' spacing={2}>
			<Typography level='body-lg'>Новая колода карточек</Typography>
			<CategorySelect onSelectChange={onCardCategorySelectChange} categoryArray={trainingFile.categoryArray}/>
			<Input placeholder='Название колоды карточек' value={title ?? ''} onChange={onTitleInputChange}/>
			<Box>
				<Button disabled={title === null} onClick={onAddNewCardSetButtonClick}>Добавить</Button>
			</Box>
		</Stack>
	)
}