import {Grid} from '@mui/joy'
import {CardDeckForm, ICardDeckFormData} from '../components/CardDeckForm.tsx'
import {TrainingCardSetTable} from '../components/TrainingCardSetTable.tsx'
import {CardDeck} from '../model/CardDeck.ts'
import {ITrainingApplication} from '../model/interfaces/ITrainingApplication.ts'

interface ICardDeckListPageProps {
	applicationModel: ITrainingApplication
}

export const CardDeckListPage = ({applicationModel}: ICardDeckListPageProps) => {
	const onAddNewCardDeck = (data: ICardDeckFormData) => {
		if (applicationModel.current.trainingFile) {
			applicationModel.current.trainingFile.pushCardDeck(new CardDeck(data.title, data.category))
		}
	}
	return (
		<Grid container spacing={2}>
			<Grid xs={2}>
				{
					applicationModel.current.trainingFile && (
						<CardDeckForm
							categoryArray={applicationModel.current.trainingFile.categoryArray}
							onSubmit={onAddNewCardDeck}
						/>
					)
				}
			</Grid>
			<Grid xs={10}>
				{
					applicationModel.current.trainingFile && applicationModel.current.trainingFile.cardDeckArray.length > 0 && (
						<TrainingCardSetTable trainingCardDeckArray={applicationModel.current.trainingFile.cardDeckArray}/>
					)
				}
			</Grid>
		</Grid>
	)
}