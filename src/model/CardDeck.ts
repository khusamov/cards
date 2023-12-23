import {observable} from 'mobx'
import {v1} from 'uuid'
import {Category} from './Category.ts'
import {ICategory} from './interfaces/ICategory.ts'
import {ITrainingCard} from './interfaces/ITrainingCard.ts'
import {ICardDeck} from './interfaces/ICardDeck.ts'

/**
 * Набор тренировочных карточек.
 */
export class CardDeck implements ICardDeck {
	/**
	 * Идентификатор категории.
	 * @type {string}
	 */
	public readonly uuid: string = v1()

	/**
	 * Название набора.
	 * Например 'Великие географические открытия'. Можно, например, использовать главы учебника.
	 */
	@observable public accessor title: string = ''

	/**
	 * Категория набора.
	 * Например история или математика. По сути это название предмета.
	 */
	@observable public accessor category: ICategory = new Category

	/**
	 * Массив карточек в наборе.
	 */
	@observable public accessor trainingCardArray: ITrainingCard[] = []
}