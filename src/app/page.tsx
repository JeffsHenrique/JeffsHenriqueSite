"use client"

import { Header } from "@/app/components/Header"
import { ThemeProvider } from "./contexts/ThemeContext"
import { AboutMe } from "./components/AboutMe"
import { PhotoAndSkills } from "./components/PhotoAndSkills"
import { GamesContainer } from "./components/GamesContainer"
import { Footer } from "./components/Footer"
import { mainScreen } from "./utils/Styles"
import { MouseEventHandler, useRef } from "react"
import { Section } from "./components/Section"

const Homepage = () => {
  const gameContainer = useRef<HTMLDivElement>(null)

  const scrollToGames: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault()
    if (gameContainer.current) {
      gameContainer.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <ThemeProvider>

      <Header />

      <div className={mainScreen}>

        <Section>
          <div className="flex flex-row max-laptop:flex-col-reverse justify-between m-8 gap-8">
            <AboutMe scrollToGames={scrollToGames} />
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
    </ThemeProvider>
  )
}

export default Homepage