import {action, observable} from 'mobx'
import {TrainingCardSetModel} from './TrainingCardSetModel.ts'

export class ApplicationTrainingCardsModel {
	/**
	 * Массив наборов карточек.
	 * @type {TrainingCardSetModel[]}
	 */
	@observable public accessor trainingCardSets: TrainingCardSetModel[] = []

	/**
	 * Добавить набор карточек.
	 * @param {TrainingCardSetModel} trainingCardSet
	 */
	@action public pushTrainingCardSet(trainingCardSet: TrainingCardSetModel) {
		this.trainingCardSets.push(trainingCardSet)
	}

	currentTrainingCardSet: TrainingCardSetModel | null = null
}