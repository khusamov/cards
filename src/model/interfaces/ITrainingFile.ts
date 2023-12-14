import {ICategory} from './ICategory.ts'
import {ITrainingCardSet} from './ITrainingCardSet.ts'

export interface ITrainingFile {
	/**
	 * Название файла.
	 */
	readonly title: string

	categories: ICategory[]

	trainingCardSets: ITrainingCardSet[]
}