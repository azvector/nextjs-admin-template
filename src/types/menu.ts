import type { LucideIcon } from "lucide-react"

export interface IMenuItemConfig {
	title: string
	icon?: LucideIcon
	path?: string
	children?: IMenuItemConfig[]
}

export type TMenuConfig = IMenuItemConfig[]

export interface IMenuBreadcrumb {
	title: string
	path?: string
	active?: boolean
}

export type TMenuBreadcrumbs = IMenuBreadcrumb[]
