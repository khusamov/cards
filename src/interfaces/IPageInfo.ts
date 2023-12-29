import {ReactNode} from 'react'

export interface IPageInfo {
	code: string
	title: string
	icon: () => ReactNode,
	page?: () => ReactNode
}