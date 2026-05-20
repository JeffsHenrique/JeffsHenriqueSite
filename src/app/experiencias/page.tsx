"use client";

import { TooltipProvider } from "@/components/ui/tooltip";
import Image from "next/image";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { LanguageProvider } from "../contexts/LanguageContext";
import { ThemeProvider } from "../contexts/ThemeContext";
import catPlayingPiano from "./assets/cat-playing-piano.gif";
import { TimelineContent } from "./components/Timeline";

const Experiences = () => {
	const currentLang =
		typeof window !== "undefined"
			? localStorage.getItem("LangContextKey")
			: null;

	return (
		<ThemeProvider>
			<TooltipProvider>
				<LanguageProvider>
					<Header shouldGoBackToHome />
					<div className="overflow-auto bg-sky-200 dark:bg-slate-900">
						<div className="my-4 pt-14 flex max-laptop:flex-col justify-center items-center gap-8 max-laptop:gap-4 text-sky-900 dark:text-sky-200">
							<h1 className="text-5xl max-laptop:text-xl underline">
								{currentLang === "us-en"
									? `My professional life`
									: "Minha vida profissional"}
							</h1>
							<Image
								className="border border-slate-700 dark:border-slate-300 shadow-lg rounded-md max-laptop:w-24"
								src={catPlayingPiano.src}
								alt="Cat coding gif"
								unoptimized
								width={160}
								height={160}
							/>
						</div>

						<TimelineContent />

						<Footer />
					</div>
				</LanguageProvider>
			</TooltipProvider>
		</ThemeProvider>
	);
};

export default Experiences;
