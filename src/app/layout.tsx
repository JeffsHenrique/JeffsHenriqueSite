import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { JetBrains_Mono, Space_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-mono",
});

const space_mono = Space_Mono({
	subsets: ["latin"],
	weight: ["400", "700"],
});

export const metadata: Metadata = {
	title: "<JeffsHenrique />",
	description: "My website!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={cn("font-mono", jetbrainsMono.variable)}>
			<body
				className={cn("bg-sky-200 dark:bg-slate-900", space_mono.className)}
			>
				{children}
			</body>
		</html>
	);
}
