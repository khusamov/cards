import {Box, Button, Input, Option, Select, Stack, Typography} from '@mui/joy'
import type {SelectOwnProps} from '@mui/joy/Select/SelectProps'
import {ChangeEventHandler, useState} from 'react'
import type {ITrainingCardSet} from '../model/interfaces/ITrainingCardSet.ts'
import {TrainingCardSetModel} from '../model/TrainingCardSetModel.ts'

interface IFormAddingNewCardSetProps {
	onAddNewCardSet: (trainingCardSet: ITrainingCardSet) => void
}

export const FormAddingNewCardSet = ({onAddNewCardSet}: IFormAddingNewCardSetProps) => {
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
			onAddNewCardSet(trainingCardSet)
			setTitle(null)
		}
	}

	const onCardCategorySelectChange: SelectOwnProps<number, false>['onChange'] = (
		(_, value) => {
			console.log(value)
		}
	)

	return (
		<Stack direction='column' spacing={2}>
			<Typography level='body-lg'>Новый набор карточек</Typography>
			<Select onChange={onCardCategorySelectChange}>
				<Option value={1}>История</Option>
				<Option value={2}>Алгебра</Option>
			</Select>
			<Input placeholder='Название набора карточек' value={title ?? ''} onChange={onTitleInputChange}/>
			<Box>
				<Button disabled={title === null} onClick={onAddNewCardSetButtonClick}>Добавить</Button>
			</Box>
		</Stack>
	)
}