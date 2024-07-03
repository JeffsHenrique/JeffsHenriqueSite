"use client"

import { useState } from "react"
import { ThemeSwitch } from "./ThemeSwitch"
import { Contact } from "./Contact"

import HomeIcon from '@mui/icons-material/Home';

export const Header = () => {
    const [contactIsOpen, setContactIsOpen] = useState(false)

    const handleContactOpen = () => {
        setContactIsOpen(!contactIsOpen)
    }

    return (
        <>
            <header className="absolute top-0 p-2 w-full h-14 flex flex-row justify-start items-center gap-16 bg-sky-900 dark:bg-slate-950 text-sky-200 shadow-xl">
                <h1 className="px-4 hover:scale-110 hover:text-sky-300 transition-all duration-500">
                    <a href="/">
                        <HomeIcon sx={{ fontSize: 40 }} />
                    </a>
                </h1>

                <hr className="h-10 border opacity-35 border-slate-600 dark:border-slate-400" />

                <div className="flex w-full justify-between">
                    <ul className="flex flex-row items-center justify-end text-lg gap-8">
                        <li className="hover:scale-105 hover:text-sky-300 transition-all"><a href="/projetos"> Projetos </a></li>
                        <li className="hover:scale-105 hover:text-sky-300 transition-all"><a href="/conhecimentos"> Conhecimentos </a></li>
                        <li className="hover:scale-105 hover:text-sky-300 transition-all"><a href="/experiencias"> Experiências </a></li>
                        <li className="hover:scale-105 hover:text-sky-300 transition-all">
                            <button onClick={handleContactOpen}>
                                Contato
                            </button>
                            <Contact
                                open={contactIsOpen}
                                onClose={handleContactOpen}
                            />
                        </li>
                    </ul>

                    <ThemeSwitch />
                </div>

            </header>
        </>
    )
}