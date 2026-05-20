"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ThemeProvider } from "../contexts/ThemeContext";
import catCoding from "../images/cat-coding.gif";
import catDreaming from "../images/cat-dreaming.gif";
import { Ambitions } from "./components/Ambitions";
import { Knowledges } from "./components/Knowledges";

import { TooltipProvider } from "@/components/ui/tooltip";
import Image from "next/image";
import { LanguageProvider } from "../contexts/LanguageContext";

const Skills = () => {
	const [isMyKnowledgesShowing, setIsMyKnowledgesShowing] =
		useState<boolean>(true);
	const [isMyAmbitionsShowing, setIsMyAmbitionsShowing] =
		useState<boolean>(false);

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
						<div className="py-14 m-8 flex justify-center items-center gap-8 text-sky-900 dark:text-sky-200">
							<button
								type="button"
								className="cursor-pointer"
								onClick={() => setIsMyKnowledgesShowing(!isMyKnowledgesShowing)}
							>
								<div className="bg-sky-300 max-laptop:hidden dark:bg-slate-800 rounded-full shadow-lg">
									{isMyKnowledgesShowing === true ? (
										<ChevronUp size={48} />
									) : (
										<ChevronDown size={48} />
									)}
								</div>
							</button>
							<div className="flex justify-center gap-2 max-laptop:flex-col">
								<h1 className="text-4xl text-center max-laptop:text-lg underline">
									{currentLang === "us-en"
										? `My knowledge and skills`
										: "Meus conhecimentos e habilidades"}
								</h1>
								<button
									type="button"
									onClick={() =>
										setIsMyKnowledgesShowing(!isMyKnowledgesShowing)
									}
								>
									<div className="hidden bg-sky-300 max-laptop:flex justify-center dark:bg-slate-800 rounded-full shadow-lg">
										{isMyKnowledgesShowing === true ? (
											<ChevronUp size={24} />
										) : (
											<ChevronDown size={24} />
										)}
									</div>
								</button>
							</div>
							<Image
								width={0}
								height={0}
								className="border border-slate-700 dark:border-slate-300 shadow-lg rounded-md w-40 max-laptop:w-24"
								src={catCoding.src}
								alt="Cat coding gif"
							/>
						</div>

						{isMyKnowledgesShowing && <Knowledges />}

						<div className="py-14 mx-8 flex justify-center items-center gap-8 text-sky-900 dark:text-sky-200">
							<button
								type="button"
								className="cursor-pointer"
								onClick={() => setIsMyAmbitionsShowing(!isMyAmbitionsShowing)}
							>
								<div className="bg-sky-300 max-laptop:hidden dark:bg-slate-800 rounded-full shadow-lg">
									{isMyAmbitionsShowing === true ? (
										<ChevronUp size={48} />
									) : (
										<ChevronDown size={48} />
									)}
								</div>
							</button>
							<div className="flex justify-center gap-2 max-laptop:flex-col">
								<h1 className="text-4xl text-center max-laptop:text-lg underline">
									{currentLang === "us-en" ? `My ambitions` : "Minhas ambições"}
								</h1>
								<button
									type="button"
									onClick={() => setIsMyAmbitionsShowing(!isMyAmbitionsShowing)}
								>
									<div className="hidden bg-sky-300 max-laptop:flex justify-center dark:bg-slate-800 rounded-full shadow-lg">
										{isMyAmbitionsShowing === true ? (
											<ChevronUp size={24} />
										) : (
											<ChevronDown size={24} />
										)}
									</div>
								</button>
							</div>
							<Image
								width={0}
								height={0}
								className="border border-slate-700 dark:border-slate-300 shadow-lg rounded-md w-24 max-laptop:w-20"
								src={catDreaming.src}
								alt="Cat coding gif"
							/>
						</div>

						{isMyAmbitionsShowing && <Ambitions />}

						<Footer />
					</div>
				</LanguageProvider>
			</TooltipProvider>
		</ThemeProvider>
	);
};

export default Skills;
