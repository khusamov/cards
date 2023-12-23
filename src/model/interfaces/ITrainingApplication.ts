import {ICardDeck} from './ICardDeck.ts'
import {ITrainingFile} from './ITrainingFile.ts'

export interface ITrainingApplicationCurrentList {
	/**
	 * Текущий файл.
	 * Требуется для определения, какие колоды выводить на вкладке 'Колоды'.
	 */
	trainingFile?: ITrainingFile

	/**
	 * Текущая колода карточек.
	 * Требуется для определения, какие карточки выводить на вкладке 'Карточки'.
	 */
	cardDeck?: ICardDeck
}

/**
 * Модель приложения.
 */
export interface ITrainingApplication {
	/**
	 * Массив файлов с тренировочными колодами.
	 */
	trainingFileArray: ITrainingFile[]

	/**
	 * Текущие сущности.
	 */
	readonly current: ITrainingApplicationCurrentList
}