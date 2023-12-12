import {observer} from 'mobx-react-lite'
import {ChangeEventHandler, useState} from 'react'
import {Button, CssVarsProvider, Input, Sheet} from '@mui/joy'
import './App.scss'
import {ApplicationTrainingCardsModel} from './model/ApplicationTrainingCardsModel.ts'

interface IApplicationProps {
	applicationModel: ApplicationTrainingCardsModel
}

export const App = observer(
	({applicationModel}: IApplicationProps) => {

		const [title, setTitle] = useState<string>('')

		const onTitleInputChange: ChangeEventHandler<HTMLInputElement> = event => {
			setTitle(event.target.value)
		}

		return (
			<CssVarsProvider>
				<Sheet variant={'outlined'}>
					<Button>Новый набор карточек</Button>
					<Input placeholder='Название набора карточек' value={title} onChange={onTitleInputChange}/>
					{title}
					{
						applicationModel.trainingCardSets.map(cardSet => <div>{cardSet.title}</div>)
					}
				</Sheet>
			</CssVarsProvider>
		)
	}
)