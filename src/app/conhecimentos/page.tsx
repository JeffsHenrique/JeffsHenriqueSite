"use client"

import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { ThemeProvider } from "../contexts/ThemeContext"
import { Knowledges } from "./components/Knowledges"
import catCoding from '../images/cat-coding.gif'
import catDreaming from '../images/cat-dreaming.gif'
import { useState } from "react"
import { Ambitions } from "./components/Ambitions"
import { mainScreen } from "../utils/Styles"

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { LanguageProvider } from "../contexts/LanguageContext"

const Skills = () => {
    const [isMyKnowledgesShowing, setIsMyKnowledgesShowing] = useState<boolean>(true)
    const [isMyAmbitionsShowing, setIsMyAmbitionsShowing] = useState<boolean>(false)

    const currentLang = typeof window !== "undefined" ? localStorage.getItem('LangContextKey') : null

    return (
        <ThemeProvider>
            <LanguageProvider>
                <Header />

                <div className={mainScreen}>

                    <div className="py-14 mx-8 flex justify-center items-center gap-8 text-sky-900 dark:text-sky-200">
                        <button onClick={() => setIsMyKnowledgesShowing(!isMyKnowledgesShowing)}>
                            <div className="bg-sky-300 max-laptop:hidden dark:bg-slate-800 rounded-full shadow-lg">
                                {isMyKnowledgesShowing === true ?
                                    <KeyboardArrowUpIcon sx={{ fontSize: 48 }} />
                                    :
                                    <KeyboardArrowDownIcon sx={{ fontSize: 48 }} />
                                }
                            </div>
                        </button>
                        <div className="flex justify-center gap-2 max-laptop:flex-col">
                            <h1 className="text-4xl text-center max-laptop:text-lg underline">{currentLang === 'us-en' ? `My knowledge and skills` : 'Meus conhecimentos e habilidades'}</h1>
                            <button onClick={() => setIsMyKnowledgesShowing(!isMyKnowledgesShowing)}>
                                <div className="hidden bg-sky-300 max-laptop:flex justify-center dark:bg-slate-800 rounded-full shadow-lg">
                                    {isMyKnowledgesShowing === true ?
                                        <KeyboardArrowUpIcon sx={{ fontSize: 24 }} />
                                        :
                                        <KeyboardArrowDownIcon sx={{ fontSize: 24 }} />
                                    }
                                </div>
                            </button>
                        </div>
                        <img
                            className="border border-slate-700 dark:border-slate-300 shadow-lg rounded-md w-40 max-laptop:w-24"
                            src={catCoding.src}
                            alt="Cat coding gif"
                        />
                    </div>

                    {isMyKnowledgesShowing && <Knowledges /> }

                    <div className="py-14 mx-8 flex justify-center items-center gap-8 text-sky-900 dark:text-sky-200">
                        <button onClick={() => setIsMyAmbitionsShowing(!isMyAmbitionsShowing)}>
                            <div className="bg-sky-300 max-laptop:hidden dark:bg-slate-800 rounded-full shadow-lg">
                                {isMyAmbitionsShowing === true ?
                                    <KeyboardArrowUpIcon sx={{ fontSize: 48 }}/>
                                    :
                                    <KeyboardArrowDownIcon sx={{ fontSize: 48 }}/>
                                }
                            </div>
                        </button>
                        <div className="flex justify-center gap-2 max-laptop:flex-col">
                            <h1 className="text-4xl text-center max-laptop:text-lg underline">{currentLang === 'us-en' ? `My ambitions` : 'Minhas ambições'}</h1>
                            <button onClick={() => setIsMyAmbitionsShowing(!isMyAmbitionsShowing)}>
                                <div className="hidden bg-sky-300 max-laptop:flex justify-center dark:bg-slate-800 rounded-full shadow-lg">
                                    {isMyAmbitionsShowing === true ?
                                        <KeyboardArrowUpIcon sx={{ fontSize: 24 }} />
                                        :
                                        <KeyboardArrowDownIcon sx={{ fontSize: 24 }} />
                                    }
                                </div>
                            </button>
                        </div>
                        <img
                            className="border border-slate-700 dark:border-slate-300 shadow-lg rounded-md w-24 max-laptop:w-20"
                            src={catDreaming.src}
                            alt="Cat coding gif"
                        />
                    </div>

                    {isMyAmbitionsShowing && <Ambitions /> }

                    <Footer />

                </div>
            </LanguageProvider>
        </ThemeProvider>
    )
}

export default Skills