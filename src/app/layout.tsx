import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { SITE_CONFIG } from "@/config/site"
import { cn } from "@/lib/utils"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
})

export const metadata: Metadata = {
	title: SITE_CONFIG.name,
	description: SITE_CONFIG.description,
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased",
					geistSans.variable,
					geistMono.variable
				)}
			>
				<div className="relative flex min-h-screen flex-col bg-background">
					{children}
				</div>
			</body>
		</html>
	)
}
