import {observable} from 'mobx'
import {v1} from 'uuid'
import {ICategory} from './interfaces/ICategory.ts'
import {ITrainingCard} from './interfaces/ITrainingCard.ts'
import {ICardDeck} from './interfaces/ICardDeck.ts'

/**
 * Колода тренировочных карточек.
 */
export class CardDeck implements ICardDeck {
	/**
	 * Идентификатор категории.
	 * @type {string}
	 */
	public readonly uuid: string = v1()

	/**
	 * Название колоды.
	 * Например 'Великие географические открытия'. Можно, например, использовать главы учебника.
	 */
	@observable public accessor title: string = ''

	/**
	 * Категория колоды.
	 * Например история или математика. По сути это название предмета.
	 */
	@observable public accessor category: ICategory

	/**
	 * Массив карточек в колоде.
	 */
	@observable public accessor trainingCardArray: ITrainingCard[] = []

	/**
	 * Конструктор колоды.
	 * @param title
	 * @param category
	 */
	public constructor(title: string, category: ICategory) {
		this.title = title
		this.category = category
	}

}