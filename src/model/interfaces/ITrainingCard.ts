import {SideName} from '../types/SideName.ts'
import {ICardSide} from './ICardSide.ts'

export interface ITrainingCard {
	readonly sides: Map<SideName, ICardSide>
}