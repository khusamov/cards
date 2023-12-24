import {Checkbox} from '@mui/joy'
import type {SxProps} from '@mui/joy/styles/types'
import {ChangeEvent, useContext} from 'react'
import {tableCheckboxContext} from '../../context/tableCheckboxContext.ts'

const sx: SxProps = {
	verticalAlign: 'sub'
}

interface IHeaderCheckboxProps {

}

export const HeaderCheckbox = ({}: IHeaderCheckboxProps) => {
	const {selectedKeySet, totalKeySet, onSelectionChange} = useContext(tableCheckboxContext)
	const indeterminate = selectedKeySet.size > 0 && selectedKeySet.size < totalKeySet.size
	const checked = totalKeySet.size > 0 && selectedKeySet.size === totalKeySet.size
	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		onSelectionChange(
			event.target.checked
				? totalKeySet
				: new Set
		)
	}
	return <Checkbox sx={sx} checked={checked} indeterminate={indeterminate} onChange={onChange}/>
}