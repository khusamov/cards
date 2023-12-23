import {action, observable} from 'mobx'
import {v1} from 'uuid'
import {ICategory} from './interfaces/ICategory.ts'
import {ICardDeck} from './interfaces/ICardDeck.ts'
import {ITrainingFile} from './interfaces/ITrainingFile.ts'

export class TrainingFile implements ITrainingFile {
	/**
	 * Идентификатор категории.
	 * @type {string}
	 */
	public readonly uuid: string = v1()

	/**
	 * Название файла.
	 */
	@observable public accessor title: string = ''

	/**
	 * Массив категорий.
	 */
	@observable public accessor categoryArray: ICategory[] = []

	/**
	 * Массив колод карточек.
	 */
	@observable public accessor cardDeckArray: ICardDeck[] = []

	/**
	 * Добавить колоду карточек.
	 * @param {ICardDeck} cardDeck
	 */
	@action public pushCardDeck(cardDeck: ICardDeck) {
		this.cardDeckArray.push(cardDeck)
	}

	/**
	 * Добавить категорию.
	 * @param {ICategory} category
	 */
	@action public pushCategory(category: ICategory) {
		this.categoryArray.push(category)
	}
}