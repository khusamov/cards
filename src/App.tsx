import {Button, CssVarsProvider, Sheet} from '@mui/joy'
import './App.scss'

export const App = (
	() => (
		<CssVarsProvider>
			<Sheet variant={'outlined'}>
				<Button>Тренировочные карточки</Button>
			</Sheet>
		</CssVarsProvider>
	)
)