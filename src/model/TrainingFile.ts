import {observable} from 'mobx'
import {ICategory} from './interfaces/ICategory.ts'
import {ITrainingCardSet} from './interfaces/ITrainingCardSet.ts'
import {ITrainingFile} from './interfaces/ITrainingFile.ts'

export class TrainingFile implements ITrainingFile {
	@observable public readonly title: string = ''

	public trainingCardSets: ITrainingCardSet[] = []
	public categories: ICategory[] = []
}