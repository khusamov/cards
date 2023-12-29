import {Select, selectClasses} from '@mui/joy'
import {SxProps} from '@mui/joy/styles/types'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'

/**
 * Select с нормальной стрелкой.
 * Замена штатному Select из @mui/joy.
 */
export const ArrowSelect = (props: Parameters<typeof Select>[0]) => {
	const {sx, ...rest} = props

	const arrowRotateStyle: SxProps = {
		[`& .${selectClasses.indicator}`]: {
			transition: '0.2s',
			[`&.${selectClasses.expanded}`]: {
				transform: 'rotate(-180deg)',
			},
		}
	}

	return (
		<Select
			sx={{...arrowRotateStyle, ...sx}}
			indicator={<KeyboardArrowDown/>}
			{...rest}
		/>
	)
}