"use client";

import { Header } from "@/app/components/Header";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useRef } from "react";
import { useIntlayer } from "react-intlayer";
import { ToastContainer } from "react-toastify";
import { Footer } from "./components/Footer";
import { Preview } from "./components/Preview";
import { Section } from "./components/Section";
import { Welcome } from "./components/Welcome";
import { Knowledges } from "./conhecimentos/components/Knowledges";
import { ThemeProvider } from "./contexts/ThemeContext";
import { TimelineContent } from "./experiencias/components/Timeline";
import { Projects } from "./projetos/components/Projects";

const Homepage = () => {
	const gameContainer = useRef<HTMLDivElement>(null);
	const projectPreviewContainer = useRef<HTMLDivElement>(null);
	const knowledgePreviewContainer = useRef<HTMLDivElement>(null);
	const experiencePreviewContainer = useRef<HTMLDivElement>(null);

	const { projects_preview, skills_preview, experiences_preview } =
		useIntlayer("preview");

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
						<Welcome />
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
								sectionTitle={projects_preview.title}
								sectionSeeMore={projects_preview.see_more}
								sectionLink="/projetos"
							/>
						</div>
					</Section>

					<Section>
						<div ref={knowledgePreviewContainer}>
							<Preview
								Section={<Knowledges />}
								sectionTitle={skills_preview.title}
								sectionSeeMore={skills_preview.see_more}
								sectionLink="/conhecimentos"
							/>
						</div>
					</Section>

					<Section>
						<div ref={experiencePreviewContainer}>
							<Preview
								Section={<TimelineContent isPreview />}
								sectionTitle={experiences_preview.title}
								sectionSeeMore={experiences_preview.see_more}
								sectionLink="/experiencias"
							/>
						</div>
					</Section>

					{/* <div className="hidden md:laptop:block">
						<Section>
							<div ref={gameContainer} className="flex my-8 justify-center">
								<GamesContainer />
							</div>
						</Section>
					</div> */}

					<br />

					<Footer />
				</div>
			</TooltipProvider>

			<ToastContainer />
		</ThemeProvider>
	);
};

export default Homepage;
