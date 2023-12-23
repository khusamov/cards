import {observable} from 'mobx'
import {v1} from 'uuid'
import {ICardSide} from './interfaces/ICardSide.ts'

export class CardSide implements ICardSide {
	/**
	 * Идентификатор категории.
	 * @type {string}
	 */
	public readonly uuid: string = v1()

	/**
	 * Текст стороны карточки.
	 * @default ''
	 * @type {string}
	 */
	@observable public accessor text: string = ''
}