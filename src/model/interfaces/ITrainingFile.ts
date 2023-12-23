import {ICategory} from './ICategory.ts'
import {ICardDeck} from './ICardDeck.ts'

/**
 * Файл для хранения категорий и колод карточек.
 */
export interface ITrainingFile {
	/**
	 * Идентификатор.
	 */
	readonly uuid: string

	/**
	 * Название файла.
	 */
	title: string

	/**
	 * Массив категорий.
	 */
	categoryArray: ICategory[]

	/**
	 * Массив колод карточек.
	 */
	cardDeckArray: ICardDeck[]

	/**
	 * Добавить колоду карточек.
	 * @param {ICardDeck} cardDeck
	 */
	pushCardDeck(cardDeck: ICardDeck): void

	/**
	 * Добавить категорию.
	 * @param {ICategory} category
	 */
	pushCategory(category: ICategory): void
}