"use client";

import { Header } from "@/app/components/Header";
import { TooltipProvider } from "@/components/ui/tooltip";
import { type MouseEventHandler, useRef } from "react";
import { ToastContainer } from "react-toastify";
import { AboutMe } from "./components/AboutMe";
import { Footer } from "./components/Footer";
import { PhotoAndSkills } from "./components/PhotoAndSkills";
import { Section } from "./components/Section";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { mainScreen } from "./utils/Styles";

const Homepage = () => {
	const gameContainer = useRef<HTMLDivElement>(null);

	const scrollToGames: MouseEventHandler<HTMLButtonElement> = (event) => {
		event.preventDefault();
		if (gameContainer.current) {
			gameContainer.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<ThemeProvider>
			<TooltipProvider>
				<LanguageProvider>
					<Header />

					<div className={mainScreen}>
						<Section>
							<div className="flex flex-row max-laptop:flex-col-reverse justify-between m-8 gap-8">
								<AboutMe scrollToGames={scrollToGames} />
								<PhotoAndSkills />
							</div>
						</Section>

						{/* <Section>
              <div className="flex my-8 justify-center">
                <CurrentProjects />
              </div>
            </Section> */}
						{/* 
						<Section>
							<div ref={gameContainer} className="flex my-8 justify-center">
								<GamesContainer />
							</div>
						</Section> */}

						<Footer />
					</div>
				</LanguageProvider>
			</TooltipProvider>

			<ToastContainer />
		</ThemeProvider>
	);
};

export default Homepage;
