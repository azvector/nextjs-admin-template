import type { TMenuConfig } from "@/types/menu"
import { Box, LayoutDashboard, Users } from "lucide-react"

export const MENU_CONFIG: TMenuConfig = [
	{
		title: "Dashboard",
		path: "/dashboard",
		icon: LayoutDashboard,
	},
	{
		title: "Master",
		icon: Box,
		children: [
			{
				title: "Products",
				path: "/master/products",
			},
			{
				title: "Users",
				path: "/master/users",
			},
		],
	},
	{
		title: "User Management",
		icon: Users,
		children: [
			{
				title: "Users",
				path: "/user-management/users",
			},
			{
				title: "Roles",
				path: "/user-management/roles",
			},
			{
				title: "Permissions",
				path: "/user-management/permissions",
			},
		],
	},
]
