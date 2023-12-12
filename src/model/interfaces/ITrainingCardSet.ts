import {ITrainingCard} from './ITrainingCard.ts'
import {ITrainingCardCategory} from './ITrainingCardCategory.ts'

/**
 * Набор тренировочных карточек.
 */
export interface ITrainingCardSet {
	/**
	 * Категория набора.
	 * Например история или математика. По сути это название предмета.
	 */
	readonly category: ITrainingCardCategory

	/**
	 * Название набора.
	 * Например 'Великие географические открытия'. Можно, например, использовать главы учебника.
	 */
	title: string

	/**
	 * Массив карточек в наборе.
	 */
	readonly cards: ITrainingCard[]
}