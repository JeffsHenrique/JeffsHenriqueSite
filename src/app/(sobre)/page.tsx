"use client";

import { TooltipProvider } from "@/components/ui/tooltip";
import { useRef } from "react";
import { Footer } from "../components/Footer";
import { GamesContainer } from "../components/GamesContainer";
import { Header } from "../components/Header";
import { Section } from "../components/Section";
import { LanguageProvider } from "../contexts/LanguageContext";
import { ThemeProvider } from "../contexts/ThemeContext";
import { PhotoAndSkills } from "./components/PhotoAndSkills";
import { Presentation } from "./components/Presentation";

interface AboutPageProps {
	hello?: string;
}

const AboutPage = ({ hello }: AboutPageProps) => {
	const gameContainer = useRef<HTMLDivElement>(null);

	return (
		<ThemeProvider>
			<TooltipProvider>
				<LanguageProvider>
					<Header shouldGoBackToHome />
					<div className="overflow-auto bg-sky-200 dark:bg-slate-900">
						<Section>
							<div className="flex pt-14 max-laptop:flex-col-reverse justify-between m-8 gap-8">
								<Presentation
									scrollToGames={() =>
										gameContainer.current?.scrollIntoView({
											behavior: "smooth",
										})
									}
								/>

								<PhotoAndSkills />
							</div>
						</Section>

						<Section>
							<div ref={gameContainer} className="flex my-8 justify-center">
								<GamesContainer />
							</div>
						</Section>
						<Footer />
					</div>
				</LanguageProvider>
			</TooltipProvider>
		</ThemeProvider>
	);
};

export default AboutPage;
