"use client";

import { TooltipProvider } from "@/components/ui/tooltip";
import Image from "next/image";
import { useIntlayer } from "react-intlayer";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { LanguageProvider } from "../contexts/LanguageContext";
import { ThemeProvider } from "../contexts/ThemeContext";
import catDrinkingCoffee from "../images/cat-drinking-coffee.gif";
import { Projects } from "./components/Projects";

const Projetos = () => {
	const { title } = useIntlayer("projects");

	return (
		<ThemeProvider>
			<TooltipProvider>
				<LanguageProvider>
					<Header shouldGoBackToHome />

					<div className="overflow-auto bg-sky-200 dark:bg-slate-900">
						<div className="my-4 py-14 flex max-laptop:flex-col justify-center items-center gap-8 text-sky-900 dark:text-sky-200">
							<h1 className="text-5xl text-center max-laptop:text-xl">
								{title}
							</h1>
							<Image
								unoptimized
								width={160}
								height={160}
								className="border border-slate-700 dark:border-slate-300 shadow-lg rounded-md w-48"
								src={catDrinkingCoffee.src}
								alt="Cat drinking coffee gif"
							/>
						</div>

						<Projects />

						<Footer />
					</div>
				</LanguageProvider>
			</TooltipProvider>
		</ThemeProvider>
	);
};

export default Projetos;
