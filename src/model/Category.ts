import {observable} from 'mobx'
import {v1} from 'uuid'
import {ICategory} from './interfaces/ICategory.ts'

export class Category implements ICategory {
	/**
	 * Идентификатор категории.
	 * @type {string}
	 */
	public readonly uuid: string = v1()

	/**
	 * Название категории.
	 * @default ''
	 * @type {string}
	 */
	@observable public accessor title: string

	/**
	 * Конструктор категории.
	 * @param {string} title
	 */
	public constructor(title: string) {
		this.title = title
	}

}