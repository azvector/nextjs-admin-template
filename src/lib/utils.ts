import type { TMenuConfig } from "@/types/menu"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function getCurrentUrl(pathname: string) {
	return pathname.split(/[?#]/)[0]
}

export function checkIsActive(pathname: string, url: string) {
	const current = getCurrentUrl(pathname)
	if (!current || !url) {
		return false
	}

	if (current === url) {
		return true
	}

	if (current.indexOf(url) > -1) {
		return true
	}

	return false
}

export const hasMenuActiveChild = (
	pathname: string,
	items: TMenuConfig
): Record<string, boolean> => {
	return items.reduce<Record<string, boolean>>((acc, item) => {
		acc[item.title] =
			item.children?.some((subItem) => {
				const isActive = subItem.path
					? checkIsActive(pathname, subItem.path)
					: false
				return isActive || false
			}) || false
		return acc
	}, {})
}
