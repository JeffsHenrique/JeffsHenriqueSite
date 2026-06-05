import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useIntlayer } from "react-intlayer";
import { useTheme } from "../contexts/ThemeContext";

export function Welcome() {
	const theme = useTheme();

	const { title, bio, request_quote } = useIntlayer("home");

	return (
		<div className="flex w-full mt-28 pt-14 pb-56">
			{theme?.theme === "dark" ? (
				<StarsBackground
					speed={90}
					starColor="#ffe990"
					transition={{ stiffness: 50, damping: 20 }}
					className={cn(
						"absolute inset-0 flex items-center justify-center rounded-xl",
						"bg-[linear-gradient(0deg,#0f172b_0%,#0a0a0a_100%)]",
					)}
				/>
			) : (
				<StarsBackground
					speed={90}
					starColor="#024a70"
					transition={{ stiffness: 50, damping: 20 }}
					className={cn(
						"absolute inset-0 flex items-center justify-center rounded-xl",
						"bg-[linear-gradient(0deg,#b8e6fe_0%,#024a70_100%)]",
					)}
				/>
			)}

			<div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto text-center">
				<div className="mb-8 flex flex-col items-center gap-2">
					<span className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-orange-500/20 dark:bg-yellow-200/20 backdrop-blur-sm rounded-full border border-orange-500 dark:border-yellow-200 text-orange-300 dark:text-yellow-200 text-lg sm:text-2xl md:text-3xl animate-float">
						{bio}
					</span>

					<h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
						<span className="inline-block bg-linear-to-r from-yellow-600 via-yellow-400 to-yellow-500 dark:from-yellow-200 dark:via-yellow-100 dark:to-yellow-200 bg-clip-text text-transparent animate-shine">
							{title.text_1}
						</span>
						<br />
						<span className="inline-block my-4 relative group bg-linear-to-r from-sky-900 via-sky-700 to-sky-900 dark:from-sky-600 dark:via-sky-200 dark:to-sky-600 bg-clip-text text-transparent animate-shine">
							{title.text_2}
							<span className="absolute -bottom-3 left-0 w-full h-1 bg-linear-to-r from-transparent via-sky-900 dark:via-sky-200 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></span>
						</span>
						<span className="inline-block bg-linear-to-r from-yellow-600 via-yellow-400 to-yellow-500 dark:from-yellow-200 dark:via-yellow-100 dark:to-yellow-200 bg-clip-text text-transparent animate-shine">
							{title.text_3}
						</span>
						<br />

						<Separator className="my-8 border rounded-md w-full border-sky-600 dark:border-sky-200" />

						<div className="flex gap-8 items-center justify-center mt-6">
							<Button
								variant={"default"}
								className="rounded-md h-12 transition-all duration-200 text-lg hover:scale-110 bg-sky-900 hover:bg-sky-950 dark:bg-sky-600 dark:hover:bg-sky-700 border-sky-700 hover:border-sky-800 dark:border-sky-600 dark:hover:border-sky-700 text-orange-200 dark:text-yellow-200 hover:text-orange-300 dark:hover:text-yellow-300"
							>
								<div className="flex items-center gap-2">
									<Link href="https://wa.me/5519988514042?text=Ol%C3%A1%2C+gostaria+de+um+or%C3%A7amento+para+um+projeto!">
										{request_quote}
									</Link>

									<ArrowRight className="size-8!" />
								</div>
							</Button>
						</div>
					</h1>
				</div>
			</div>
		</div>
	);
}
