"use client"

import { ChevronRight } from "lucide-react"

import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
	SidebarGroup,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { MENU_CONFIG } from "@/config/menu"
import { checkIsActive, cn, hasMenuActiveChild } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export function NavMenu() {
	const pathname = usePathname()
	const [menuActiveChild, setMenuActiveChild] = useState<
		Record<string, boolean>
	>({})

	useEffect(() => {
		const updatedMenuActiveChild = hasMenuActiveChild(pathname, MENU_CONFIG)
		setMenuActiveChild(updatedMenuActiveChild)
	}, [pathname])

	const toggleMenuActiveChild = (title: string) => {
		setMenuActiveChild((prev) => ({
			...prev,
			[title]: !prev[title],
		}))
	}

	return (
		<SidebarGroup>
			<SidebarMenu>
				{MENU_CONFIG.map((item) => {
					if (!item.children) {
						return (
							<SidebarMenuItem key={item.title}>
								<SidebarMenuButton
									asChild
									tooltip={item.title}
									isActive={
										item.path ? checkIsActive(pathname, item.path) : false
									}
								>
									{item.path ? (
										<Link href={item.path}>
											{item.icon && <item.icon />}
											<span>{item.title}</span>
										</Link>
									) : (
										<>
											{item.icon && <item.icon />}
											<span>{item.title}</span>
										</>
									)}
								</SidebarMenuButton>
							</SidebarMenuItem>
						)
					}

					return (
						<Collapsible
							key={item.title}
							asChild
							open={menuActiveChild[item.title]}
							onOpenChange={() => toggleMenuActiveChild(item.title)}
							className="group/collapsible"
						>
							<SidebarMenuItem>
								<CollapsibleTrigger asChild>
									<SidebarMenuButton tooltip={item.title}>
										{item.icon && <item.icon />}
										<span>{item.title}</span>
										{item.children && (
											<ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
										)}
									</SidebarMenuButton>
								</CollapsibleTrigger>
								<CollapsibleContent>
									<SidebarMenuSub>
										{item.children?.map((subItem) => (
											<SidebarMenuSubItem key={subItem.title}>
												<SidebarMenuSubButton
													asChild
													isActive={
														subItem.path
															? checkIsActive(pathname, subItem.path)
															: false
													}
													className={cn(
														subItem.path &&
															checkIsActive(pathname, subItem.path) &&
															"font-medium"
													)}
												>
													{subItem.path ? (
														<Link href={subItem.path}>{subItem.title}</Link>
													) : (
														<span>{subItem.title}</span>
													)}
												</SidebarMenuSubButton>
											</SidebarMenuSubItem>
										))}
									</SidebarMenuSub>
								</CollapsibleContent>
							</SidebarMenuItem>
						</Collapsible>
					)
				})}
			</SidebarMenu>
		</SidebarGroup>
	)
}
