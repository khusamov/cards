import { Box } from '@mui/joy'
import {version, description} from '../../package.json'

export const AboutPage = () => {
	return (
		<Box>
			<div>Программа: {description}</div>
			<div>Версия программы: {version}</div>
			<div>Дата сборки: {BUILD_DATE}</div>
		</Box>
	)
}