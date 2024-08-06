"use client"

import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { ThemeProvider } from "../contexts/ThemeContext"
import catPlayingPiano from './assets/cat-playing-piano.gif'
import { mainScreen } from "../utils/Styles"
import { TimelineContent } from "./components/Timeline"

const Experiences = () => {
    return (
        <ThemeProvider>

            <Header />

            <div className={mainScreen}>

                <div className="my-4 flex max-laptop:flex-col justify-center items-center gap-8 max-laptop:gap-4 text-sky-900 dark:text-sky-200">
                    <h1 className="text-5xl max-laptop:text-xl underline">Minha vida profissional</h1>
                    <img
                        className="border border-slate-700 dark:border-slate-300 shadow-lg rounded-md w-40 max-laptop:w-24"
                        src={catPlayingPiano.src}
                        alt="Cat coding gif"
                    />
                </div>

                <TimelineContent />

                <Footer />
            </div>
        </ThemeProvider>
    )
}

export default Experiences