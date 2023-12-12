import {CardSideModel} from './CardSideModel.ts'
import {ICardSide} from './interfaces/ICardSide.ts'
import {ITrainingCard} from './interfaces/ITrainingCard.ts'
import {SideName} from './types/SideName.ts'

export class TrainingCardModel implements ITrainingCard {
	public readonly sides: Map<SideName, ICardSide> = new Map

	public constructor() {
		this.sides.set(SideName.front, new CardSideModel)
		this.sides.set(SideName.reverse, new CardSideModel)
	}
}