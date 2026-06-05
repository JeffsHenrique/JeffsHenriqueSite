import { cn } from "@/lib/utils";
import { getHTMLTextDir } from "intlayer";
import type { Metadata } from "next";
import { IntlayerClientProvider, type NextLayoutIntlayer } from "next-intlayer";
import { JetBrains_Mono, Space_Mono } from "next/font/google";
import "./globals.css";

export { generateStaticParams } from "next-intlayer";

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

const RootLayout: NextLayoutIntlayer = async ({ children, params }) => {
	const { locale } = await params;
	return (
		<html
			lang={locale}
			dir={getHTMLTextDir(locale)}
			className={cn("font-mono", jetbrainsMono.variable)}
		>
			<body
				className={cn("bg-sky-200 dark:bg-slate-900", space_mono.className)}
			>
				<IntlayerClientProvider locale={locale}>
					{children}
				</IntlayerClientProvider>
			</body>
		</html>
	);
};

export default RootLayout;

export const dynamic = "force-dynamic";
