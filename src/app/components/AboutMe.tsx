import { MouseEventHandler, useState } from "react"
import { Contact } from "./Contact"

import catPlaying from '@/app/assets/cat-playing1.gif'

interface AboutMeProps {
    scrollToGames: MouseEventHandler<HTMLButtonElement>
}

export const AboutMe = ({ scrollToGames }: AboutMeProps) => {
    const [contactIsOpen, setContactIsOpen] = useState(false)

    const handleContactOpen = () => {
        setContactIsOpen(!contactIsOpen)
    }

    return (
        <div className="w-2/5 max-laptop:w-full border-2 overflow-auto border-slate-700 dark:border-slate-300 rounded-md shadow-lg text-sky-900 dark:text-sky-200 p-2">
            <div className="flex justify-center">
                <h1 className="my-2 text-5xl max-laptop:text-3xl text-center">Quem sou eu?</h1>
            </div>

            <hr className="my-2 border border-slate-700 dark:border-slate-300" />

            <div className="flex flex-col gap-2 text-lg max-laptop:text-sm text-center px-2">
                <p>
                    Apaixonado por computador desde a infância, descobri recentemente o quão mais apaixonante essa área pode ser.<br />
                    Gosto de colocar os conhecimentos em prática, estes adquiridos com estudo ou vivência.<br />
                    Também sou uma pessoa bem comunicativa, estando sempre disposto a entender a outra parte 😊.<br />
                </p>

                <p>
                    Aproveite para conhecer um pouco dos meus <a className="font-bold text-sky-700 dark:text-sky-500" href="/projetos">projetos</a>, <a className="font-bold text-sky-700 dark:text-sky-500" href="/conhecimentos">conhecimentos</a> e <a className="font-bold text-sky-700 dark:text-sky-500" href="/experiencias">experiências</a>.
                </p>

                <p className="my-4">
                    Fique à vontade para entrar em <button className="underline font-bold" onClick={handleContactOpen}>contato</button> comigo! 😁
                </p>

                <Contact
                    open={contactIsOpen}
                    onClose={handleContactOpen}
                />

                <p className="text-sm">
                    Ou também, se quiser, você também pode <button className="text-purple-700 dark:text-purple-500" onClick={scrollToGames}>tirar um tempo para se divertir.</button>
                </p>

                <div className="flex justify-center items-center">
                    <img className="rounded-md" width={150} src={catPlaying.src} />
                </div>
            </div>
        </div>
    )
}