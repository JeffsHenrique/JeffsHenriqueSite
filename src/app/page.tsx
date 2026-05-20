"use client";

import { Header } from "@/app/components/Header";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useRef } from "react";
import { ToastContainer } from "react-toastify";
import { AboutMe } from "./components/AboutMe";
import { Footer } from "./components/Footer";
import { GamesContainer } from "./components/GamesContainer";
import { PhotoAndSkills } from "./components/PhotoAndSkills";
import { Preview } from "./components/Preview";
import { Section } from "./components/Section";
import { Knowledges } from "./conhecimentos/components/Knowledges";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { TimelineContent } from "./experiencias/components/Timeline";
import { Projects } from "./projetos/components/Projects";

const Homepage = () => {
	const gameContainer = useRef<HTMLDivElement>(null);
	const projectPreviewContainer = useRef<HTMLDivElement>(null);
	const knowledgePreviewContainer = useRef<HTMLDivElement>(null);
	const experiencePreviewContainer = useRef<HTMLDivElement>(null);

	const scrollTo = (
		{ element }: { element: HTMLDivElement },
		event: MouseEvent,
	) => {
		event.preventDefault();
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<ThemeProvider>
			<TooltipProvider>
				<LanguageProvider>
					<Header
						scrollToProject={(event) => {
							if (projectPreviewContainer.current) {
								scrollTo(
									{ element: projectPreviewContainer.current },
									event as unknown as MouseEvent,
								);
							}
						}}
						scrollToKnowledge={(event) => {
							if (knowledgePreviewContainer.current) {
								scrollTo(
									{ element: knowledgePreviewContainer.current },
									event as unknown as MouseEvent,
								);
							}
						}}
						scrollToExperience={(event) => {
							if (experiencePreviewContainer.current) {
								scrollTo(
									{ element: experiencePreviewContainer.current },
									event as unknown as MouseEvent,
								);
							}
						}}
					/>
					<div className="overflow-auto bg-sky-200 dark:bg-slate-900">
						<Section>
							<div className="flex pt-14 flex-row max-laptop:flex-col-reverse justify-between m-8 gap-8">
								<AboutMe
									scrollToGames={(event) => {
										if (gameContainer.current) {
											scrollTo(
												{ element: gameContainer.current },
												event as unknown as MouseEvent,
											);
										}
									}}
								/>
								<PhotoAndSkills />
							</div>
						</Section>

						{/* <Section>
              <div className="flex my-8 justify-center">
                <CurrentProjects />
              </div>
            </Section> */}

						<Section>
							<div ref={projectPreviewContainer}>
								<Preview
									Section={<Projects isPreview />}
									sectionTitle="MEUS PROJETOS"
									sectionSeeMore="VER MAIS PROJETOS"
									sectionLink="/projetos"
								/>
							</div>
						</Section>

						<Section>
							<div ref={knowledgePreviewContainer}>
								<Preview
									Section={<Knowledges />}
									sectionTitle="MEUS CONHECIMENTOS"
									sectionSeeMore="VER MAIS CONHECIMENTOS"
									sectionLink="/conhecimentos"
								/>
							</div>
						</Section>

						<Section>
							<div ref={experiencePreviewContainer}>
								<Preview
									Section={<TimelineContent isPreview />}
									sectionTitle="EXPERIÊNCIAS ATUAIS"
									sectionSeeMore="VER TODA MINHA EXPERIÊNCIA"
									sectionLink="/experiencias"
								/>
							</div>
						</Section>

						<div className="hidden md:laptop:block">
							<Section>
								<div ref={gameContainer} className="flex my-8 justify-center">
									<GamesContainer />
								</div>
							</Section>
						</div>

						<Footer />
					</div>
				</LanguageProvider>
			</TooltipProvider>

			<ToastContainer />
		</ThemeProvider>
	);
};

export default Homepage;
