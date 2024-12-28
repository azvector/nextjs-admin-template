import { checkIsActive } from "@/lib/utils"
import type { IMenuItemConfig, TMenuConfig } from "@/types/menu"

const useMenuCurrentItem = (
	pathname: string,
	items: TMenuConfig
): IMenuItemConfig | null => {
	const findCurrentItem = (items: TMenuConfig): IMenuItemConfig | null => {
		for (const item of items) {
			if (!item) continue

			if (item.path && checkIsActive(pathname, item.path)) {
				return item
			}

			if (item.children && Array.isArray(item.children)) {
				const childItem = findCurrentItem(item.children as TMenuConfig)
				if (childItem) {
					return childItem
				}
			}
		}
		return null
	}

	return findCurrentItem(items)
}

export { useMenuCurrentItem }
