/**
 * Сторона карточек.
 * На одной стороне карточки может быть простой текст.
 */
export interface ICardSide {
	/**
	 * Идентификатор.
	 */
	readonly uuid: string

	/**
	 * Текст стороны карточки.
	 */
	text: string
}