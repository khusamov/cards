import {action, observable, reaction} from 'mobx'
import {ICardDeck} from './interfaces/ICardDeck.ts'
import {ITrainingApplication, ITrainingApplicationCurrentList} from './interfaces/ITrainingApplication.ts'
import {ITrainingFile} from './interfaces/ITrainingFile.ts'

export class TrainingApplication implements ITrainingApplication {
	/**
	 * Массив файлов с тренировочными колодами.
	 */
	@observable public accessor trainingFileArray: ITrainingFile[] = []

	/**
	 * Текущие сущности.
	 */
	@observable public accessor current: ITrainingApplicationCurrentList = {}

	@action public pushTrainingFile(trainingFile: ITrainingFile) {
		this.trainingFileArray.push(trainingFile)
	}

	@action public setCurrentTrainingFile(trainingFile: ITrainingFile) {
		this.current.trainingFile = trainingFile
	}

	@action public unsetCurrentTrainingFile() {
		delete this.current.trainingFile
	}

	@action public setCurrentCardDeck(cardDeck: ICardDeck) {
		this.current.cardDeck = cardDeck
	}

	/**
	 * Конструктор модели приложения.
	 */
	public constructor() {
		reaction(() => this.trainingFileArray.length, this.onTrainingFileArrayLengthChange.bind(this))
	}

	/**
	 * Обработчик события 'Изменилось количество файлов'.
	 * @param {number} length
	 * @private
	 */
	@action private onTrainingFileArrayLengthChange(length: number): void {
		this.unsetCurrentTrainingFile()
		const firstTrainingFile = this.trainingFileArray[0]
		if (length === 1 && firstTrainingFile) {
			this.setCurrentTrainingFile(firstTrainingFile)
		}
	}
}