import {observable} from 'mobx'
import {v1} from 'uuid'
import {CardSide} from './CardSide.ts'
import {ICardSide} from './interfaces/ICardSide.ts'
import {ITrainingCard} from './interfaces/ITrainingCard.ts'

export class TrainingCard implements ITrainingCard {
	/**
	 * Идентификатор категории.
	 * @type {string}
	 */
	public readonly uuid: string = v1()

	/**
	 * Лицевая сторона карточки.
	 */
	@observable public accessor front: ICardSide = new CardSide

	/**
	 * Обратная сторона карточки.
	 */
	@observable public accessor back: ICardSide = new CardSide
}