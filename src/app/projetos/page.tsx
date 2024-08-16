"use client"

import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { LanguageProvider } from "../contexts/LanguageContext"
import { ThemeProvider } from "../contexts/ThemeContext"
import catDrinkingCoffee from '../images/cat-drinking-coffee.gif'
import { mainScreen } from "../utils/Styles"
import { Projects } from "./components/Projects"

const Projetos = () => {
    const currentLang = typeof window !== "undefined" ? localStorage.getItem('LangContextKey') : null

    return (
        <ThemeProvider>
            <LanguageProvider>
                <Header />

                <div className={mainScreen}>

                    <div className="my-4 flex max-laptop:flex-col justify-center items-center gap-8 text-sky-900 dark:text-sky-200">
                        <h1 className="text-5xl text-center max-laptop:text-xl">{currentLang === 'us-en' ? `Meet my projects!` : 'Conheça os meus projetos!'}</h1>
                        <img
                            className="border border-slate-700 dark:border-slate-300 shadow-lg rounded-md w-48"
                            src={catDrinkingCoffee.src}
                            alt="Cat drinking coffee gif"
                        />
                    </div>

                    <Projects />

                    <Footer />
                </div>
            </LanguageProvider>
        </ThemeProvider>
    )
}

export default Projetos