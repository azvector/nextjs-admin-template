import { checkIsActive } from "@/lib/utils"
import type { TMenuBreadcrumbs, TMenuConfig } from "@/types/menu"

const useMenuBreadcrumbs = (
	pathname: string,
	items: TMenuConfig
): TMenuBreadcrumbs => {
	const findParents = (menuItems: TMenuConfig): TMenuBreadcrumbs => {
		for (const item of menuItems) {
			if (!item) continue

			if (item.path && checkIsActive(pathname, item.path)) {
				return [
					{
						title: item.title,
						path: item.path,
						active: true,
					},
				]
			}

			if (item.children && Array.isArray(item.children)) {
				const childBreadcrumbs = findParents(item.children as TMenuConfig)
				if (childBreadcrumbs.length > 0) {
					return [
						{
							title: item.title,
							path: item.path,
							active: false,
						},
						...childBreadcrumbs,
					]
				}
			}
		}

		return []
	}

	return findParents(items)
}

export { useMenuBreadcrumbs }
