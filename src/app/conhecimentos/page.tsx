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

const Skills = () => {
    const [isMyKnowledgesShowing, setIsMyKnowledgesShowing] = useState<boolean>(true)
    const [isMyAmbitionsShowing, setIsMyAmbitionsShowing] = useState<boolean>(false)

    return (
        <ThemeProvider>

            <Header />

            <div className={mainScreen}>

                <div className="py-14 flex justify-center items-center gap-8 text-sky-900 dark:text-sky-200">
                    <button onClick={() => setIsMyKnowledgesShowing(!isMyKnowledgesShowing)}>
                        <div className="bg-sky-300 dark:bg-slate-800 rounded-full shadow-lg">
                            {isMyKnowledgesShowing === true ?
                                <svg className="fill-sky-900 dark:fill-sky-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="48"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>
                                :
                                <svg className="fill-sky-900 dark:fill-sky-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="48"><path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                            }
                        </div>
                    </button>
                    <h1 className="text-5xl underline">Meus conhecimentos e habilidades</h1>
                    <img
                        className="border border-slate-700 dark:border-slate-300 shadow-lg rounded-md w-40"
                        src={catCoding.src}
                        alt="Cat coding gif"
                    />
                </div>

                {isMyKnowledgesShowing && <Knowledges /> }

                <div className="py-14 flex justify-center items-center gap-8 text-sky-900 dark:text-sky-200">
                    <button onClick={() => setIsMyAmbitionsShowing(!isMyAmbitionsShowing)}>
                        <div className="bg-sky-300 dark:bg-slate-800 rounded-full shadow-lg">
                            {isMyAmbitionsShowing === true ?
                                <svg className="fill-sky-900 dark:fill-sky-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="48"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>
                                :
                                <svg className="fill-sky-900 dark:fill-sky-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="48"><path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                            }
                        </div>
                    </button>
                    <h1 className="text-5xl underline">Minhas ambições</h1>
                    <img
                        className="border border-slate-700 dark:border-slate-300 shadow-lg rounded-md w-24"
                        src={catDreaming.src}
                        alt="Cat coding gif"
                    />
                </div>

                {isMyAmbitionsShowing && <Ambitions /> }

                <Footer />

            </div>


        </ThemeProvider>
    )
}

export default Skills