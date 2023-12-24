import {createContext} from 'react'

export interface ITableCheckboxContextValue {
	/**
	 * Массив ключей всех записей.
	 */
	totalKeySet: Set<number>

	/**
	 * Массив ключей выбранных записей.
	 */
	selectedKeySet: Set<number>

	/**
	 * Обработчик события 'Изменился массив ключей выбранных записей'.
	 * @param {number[]} selectedKeyArray
	 */
	onSelectionChange: (selectedKeySet: Set<number>) => void
}

export const tableCheckboxContext = createContext<ITableCheckboxContextValue>({
	totalKeySet: new Set,
	selectedKeySet: new Set,
	onSelectionChange: () => {}
})

export const TableCheckboxContextProvider = tableCheckboxContext.Provider
