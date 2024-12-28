import {
	Sidebar as BaseSidebar,
	SidebarContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Icons } from "../icons"
import { NavMenu } from "./nav-menu"

export function Sidebar({
	...props
}: React.ComponentProps<typeof BaseSidebar>) {
	return (
		<BaseSidebar {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<div className="flex gap-2 py-3 px-2">
							<Icons.logo className="size-7" />
							<span className="text-xl font-extrabold">azvector</span>
						</div>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<NavMenu />
			</SidebarContent>
		</BaseSidebar>
	)
}
