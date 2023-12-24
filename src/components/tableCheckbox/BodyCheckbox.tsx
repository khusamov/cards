import {Checkbox} from '@mui/joy'
import type {SxProps} from '@mui/joy/styles/types'
import {ChangeEvent, useContext} from 'react'
import {tableCheckboxContext} from '../../context/tableCheckboxContext.ts'

const sx: SxProps = {
	verticalAlign: 'sub'
}

interface IBodyCheckboxProps {
	id: number
}

export const BodyCheckbox = ({id}: IBodyCheckboxProps) => {
	const {selectedKeySet, onSelectionChange} = useContext(tableCheckboxContext)
	const checked = selectedKeySet.has(id)
	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const newSelectedKeyArray = new Set(selectedKeySet)
		if (event.target.checked) {
			newSelectedKeyArray.add(id)
		} else {
			newSelectedKeyArray.delete(id)
		}
		onSelectionChange(newSelectedKeyArray)
	}
	return <Checkbox sx={sx} checked={checked} onChange={onChange}/>
}