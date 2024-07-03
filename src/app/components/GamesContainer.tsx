"use client"

import { useCallback, useEffect, useState } from 'react'
import catPlaying from '../images/cat-playing.gif'
import { GameDialog } from './GameDialog'
import { Game } from "../types/Game"
import { gameData } from "../utils/GameData"
import { Tooltip } from '@mui/material'

export const GamesContainer = () => {
    const [games, setGames] = useState<Game[]>([])
    const [selectedGame, setSelectedGame] = useState<Game | null>(null)
    const [isInternetGamesShowing, setIsInternetGamesShowing] = useState<boolean>(false)
    const [isMyGamesShowing, setisMyGamesShowing] = useState<boolean>(false)

    const getGames = useCallback(async () => {
        try {
            const data = await gameData.getGames()
            setGames(data)
        } catch (error) {
            console.error(error)
        }
    }, [])

    const handleGameDialogOpen = (game: Game) => {
        setSelectedGame(game)
    }

    const handleGameDialogClose = () => {
        setSelectedGame(null)
    }

    const handleShowingMyGames = () => {
        setisMyGamesShowing(!isMyGamesShowing)
        setIsInternetGamesShowing(false)
    }

    const handleShowingInternetGames = () => {
        setIsInternetGamesShowing(!isInternetGamesShowing)
        setisMyGamesShowing(false)
    }

    useEffect(() => {
        getGames()
    }, [getGames])

    return (
        <div className="w-[80vw] min-h-[65vh] m-2 flex flex-row gap-8 justify-start overflow-x-scroll scroll-smooth border-2 border-slate-700 dark:border-slate-300 rounded-md shadow-lg text-sky-900 dark:text-sky-200 p-2">
            <div className="ml-4 flex flex-col gap-3 justify-center min-w-[12vw] max-w-[12vw]">
                <h1 className="text-2xl font-bold text-center underline">Tire um tempo para se divertir</h1>
                <img
                    className="border border-slate-700 dark:border-slate-300 shadow-lg rounded-md"
                    src={catPlaying.src}
                    alt="White cat playing gif"
                />

                <div className='flex flex-col items-center gap-8'>
                    <Tooltip
                        title={<h1 className='text-lg text-center'>Jogos desenvolvidos por mim</h1>}
                        arrow
                        disableInteractive
                    >
                        <button onClick={handleShowingMyGames}>
                            <div className='p-2 flex flex-row gap-4 justify-center items-center border rounded-md shadow-lg border-slate-700 dark:border-slate-300'>
                                <p className='text-xl font-bold'>Jogos autorais:</p>
                                <div className="bg-sky-300 dark:bg-slate-800 rounded-full shadow-lg">
                                    {isMyGamesShowing === true ?
                                        <svg className="fill-sky-900 dark:fill-sky-200 -rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="48"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>
                                        :
                                        <svg className="fill-sky-900 dark:fill-sky-200 -rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="48"><path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                                    }
                                </div>
                            </div>
                        </button>
                    </Tooltip>

                    <Tooltip
                        title={<h1 className='text-lg text-center'>Jogos incorporados da internet. <p className='font-bold text-sky-200'>Pode conter anúncios!</p></h1>}
                        arrow
                        disableInteractive
                    >
                        <button onClick={handleShowingInternetGames}>
                            <div className='p-2 flex flex-row gap-4 justify-center items-center border rounded-md shadow-lg border-slate-700 dark:border-slate-300'>
                                <p className='text-xl font-bold'>Jogos da Internet:</p>
                                <div className="bg-sky-300 dark:bg-slate-800 rounded-full shadow-lg">
                                    {isInternetGamesShowing === true ?
                                        <svg className="fill-sky-900 dark:fill-sky-200 -rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="48"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>
                                        :
                                        <svg className="fill-sky-900 dark:fill-sky-200 -rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="48"><path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                                    }
                                </div>
                            </div>
                        </button>
                    </Tooltip>
                </div>

            </div>

            <hr className="h-full border border-slate-700 dark:border-slate-300" />

            {games.map((game) => {
                const conditions = (game.developedBy === 'internet' && isInternetGamesShowing) || (game.developedBy === 'jeffs' && isMyGamesShowing) || (!isInternetGamesShowing && !isMyGamesShowing)

                if (conditions) {
                    return (
                        <div className="p-4 min-w-[20vw] h-full border border-slate-700 dark:border-slate-300 rounded-md shadow-lg">
                            <div className="h-full flex flex-col gap-12 justify-center items-center">
                                <h1 className="text-2xl font-bold underline">{game.title}</h1>
                                <button onClick={() => handleGameDialogOpen(game)}>
                                    <img className='size-72 border-2 border-slate-700 dark:border-slate-300 rounded-md' src={game.img} alt={game.title}/>
                                </button>
                            </div>
                        </div>
                    )
                }
            })}

            {selectedGame && (
                <GameDialog
                    open={Boolean(selectedGame)}
                    onClose={handleGameDialogClose}
                    title={selectedGame.title}
                    source={selectedGame.source}
                />
            )}
        </div>
    )
}