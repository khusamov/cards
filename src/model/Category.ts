import {observable} from 'mobx'
import {v1} from 'uuid'
import {ICategory} from './interfaces/ICategory.ts'

export class Category implements ICategory {
	@observable public title: string = ''
	public readonly uuid: string = v1()
}