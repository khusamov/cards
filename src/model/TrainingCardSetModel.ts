import {observable} from 'mobx'
import {ITrainingCard} from './interfaces/ITrainingCard.ts'
import {ITrainingCardCategory} from './interfaces/ITrainingCardCategory.ts'
import {ITrainingCardSet} from './interfaces/ITrainingCardSet.ts'
import {TrainingCardCategoryModel} from './TrainingCardCategoryModel.ts'

/**
 * Набор тренировочных карточек.
 */
export class TrainingCardSetModel implements ITrainingCardSet {
	/**
	 * Категория набора.
	 * Например история или математика. По сути это название предмета.
	 */
	public readonly category: ITrainingCardCategory = new TrainingCardCategoryModel

	/**
	 * Название набора.
	 * Например 'Великие географические открытия'. Можно, например, использовать главы учебника.
	 */
	@observable public title: string = ''

	/**
	 * Массив карточек в наборе.
	 */
	@observable public readonly cards: ITrainingCard[] = []
}