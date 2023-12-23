import {ITrainingCard} from './ITrainingCard.ts'
import {ICategory} from './ICategory.ts'

/**
 * Колода карточек.
 */
export interface ICardDeck {
	/**
	 * Идентификатор.
	 */
	readonly uuid: string

	/**
	 * Название набора.
	 * Например 'Великие географические открытия'. Можно, например, использовать главы учебника.
	 */
	title: string

	/**
	 * Категория набора.
	 * Например история или математика. По сути это название предмета.
	 */
	category: ICategory

	/**
	 * Массив карточек в наборе.
	 */
	trainingCardArray: ITrainingCard[]
}