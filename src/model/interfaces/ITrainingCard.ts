import {ICardSide} from './ICardSide.ts'

/**
 * Тренировочная карточка.
 * Обладает двумя сторонами.
 */
export interface ITrainingCard {
	/**
	 * Идентификатор.
	 */
	readonly uuid: string

	/**
	 * Лицевая сторона карточки.
	 */
	readonly front: ICardSide

	/**
	 * Обратная сторона карточки.
	 */
	readonly back: ICardSide
}