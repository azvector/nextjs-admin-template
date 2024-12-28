import { Header } from "@/components/layouts/header"
import { Sidebar } from "@/components/layouts/sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export default function MainLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<SidebarProvider>
			<Sidebar />
			<SidebarInset>
				<Header />
				{children}
			</SidebarInset>
		</SidebarProvider>
	)
}
