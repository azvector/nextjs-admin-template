"use client"

import {
	Breadcrumb as BaseBreadcrumb,
	BreadcrumbItem,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { MENU_CONFIG } from "@/config/menu"
import { useMenuBreadcrumbs } from "@/hooks/use-menu-breadcrumbs"
import { useMenuCurrentItem } from "@/hooks/use-menu-current"
import { usePathname } from "next/navigation"
import { Fragment } from "react"

export function Breadcrumb() {
	const pathname = usePathname()
	const currentMenuItem = useMenuCurrentItem(pathname, MENU_CONFIG)
	const items = useMenuBreadcrumbs(pathname, MENU_CONFIG)

	return (
		<div className="flex items-center gap-2 px-6">
			<div className="flex items-center flex-wrap gap-1 lg:gap-5">
				<h1 className="font-medium text-lg text-gray-900">
					{currentMenuItem?.title}
				</h1>
			</div>
			<Separator orientation="vertical" className="mr-2 h-4" />
			<BaseBreadcrumb>
				<BreadcrumbList>
					{items.map((item, index) => (
						<Fragment key={item.title}>
							{item.active ? (
								<BreadcrumbItem>
									<BreadcrumbPage>{item.title}</BreadcrumbPage>
								</BreadcrumbItem>
							) : (
								<BreadcrumbItem className="hidden md:block">
									{item.title}
								</BreadcrumbItem>
							)}
							{index !== items.length - 1 && (
								<BreadcrumbSeparator className="hidden md:block" />
							)}
						</Fragment>
					))}
				</BreadcrumbList>
			</BaseBreadcrumb>
		</div>
	)
}
