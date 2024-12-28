import { Breadcrumb } from "./breadcrumb"
import { UserToolbar } from "./user-toolbar"

export function Header() {
	return (
		<header className="flex sticky top-0 bg-background h-16 shrink-0 items-center justify-between gap-2 shadow-sm">
			<Breadcrumb />
			<div className="flex items-center gap-2 px-4">
				<UserToolbar />
			</div>
		</header>
	)
}
