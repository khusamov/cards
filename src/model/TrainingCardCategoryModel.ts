import {observable} from 'mobx'
import {ITrainingCardCategory} from './interfaces/ITrainingCardCategory.ts'

export class TrainingCardCategoryModel implements ITrainingCardCategory {
	@observable public accessor title: string = ''
}