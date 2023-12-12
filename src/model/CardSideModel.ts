import {observable} from 'mobx'
import {ICardSide} from './interfaces/ICardSide.ts'

export class CardSideModel implements ICardSide {
	@observable public text: string = ''
}