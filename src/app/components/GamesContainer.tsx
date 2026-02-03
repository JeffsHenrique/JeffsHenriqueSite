"use client"

import { useCallback, useEffect, useState } from 'react'
import catPlaying from '../images/cat-playing.gif'
import { GameDialog } from './GameDialog'
import { Game } from "../types/Game"
import { gameData } from "../utils/GameData"
import { Tooltip } from '@mui/material'

import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useTheme } from '../contexts/ThemeContext'

export const GamesContainer = () => {
    const [games, setGames] = useState<Game[]>([])
    const [selectedGame, setSelectedGame] = useState<Game | null>(null)
    const [isInternetGamesShowing, setIsInternetGamesShowing] = useState<boolean>(false)
    const [isMyGamesShowing, setisMyGamesShowing] = useState<boolean>(false)

    const theme = useTheme()
    const currentLang = localStorage.getItem('LangContextKey')

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
    }

    const handleShowingInternetGames = () => {
        setIsInternetGamesShowing(!isInternetGamesShowing)
    }

    useEffect(() => {
        getGames()
    }, [getGames])

    return (
        <div className="w-[80vw] max-laptop:max-w-80 min-h-[65vh] m-2 flex flex-row max-laptop:flex-col gap-8 justify-start overflow-x-scroll max-laptop:overflow-x-hidden scroll-smooth border-2 border-slate-700 dark:border-slate-300 rounded-md shadow-lg text-sky-900 dark:text-sky-200 p-2">
            <div className="ml-4 max-laptop:ml-0 flex flex-col gap-3 justify-center min-w-[12vw] max-w-[12vw] max-laptop:max-w-full">
                <h1 className="text-2xl max-laptop:text-lg font-bold text-center underline">{currentLang === 'us-en' ? `Take a break and have fun` : 'Tire um tempo para se divertir'}</h1>
                <div className='flex justify-center'>
                    <img
                        className="border border-slate-700 dark:border-slate-300 shadow-lg rounded-md max-laptop:size-48"
                        src={catPlaying.src}
                        alt="White cat playing gif"
                    />
                </div>

                <div className='flex flex-col items-center gap-8'>
                    <Tooltip
                        title={<h1 className='text-lg text-center'>{currentLang === 'us-en' ? `Games developed by me` : 'Jogos desenvolvidos por mim'}</h1>}
                        arrow
                        disableInteractive
                    >
                        <button onClick={handleShowingMyGames}>
                            <div className='p-2 flex flex-row gap-4 justify-center items-center border rounded-md shadow-lg border-slate-700 dark:border-slate-300'>
                                <p className='text-base font-bold'>{currentLang === 'us-en' ? `My games:` : 'Jogos autorais:'}</p>
                                <div className="bg-sky-300 dark:bg-slate-800 rounded-full shadow-lg">
                                    {isMyGamesShowing === true ?
                                        <CheckBoxIcon
                                            sx={{
                                                fontSize: 24,
                                                color: `${theme?.theme === 'dark' ? '#7dd3fc' : '#0c4a6e'}`
                                            }}
                                        />
                                        :
                                        <CheckBoxOutlineBlankIcon
                                            sx={{
                                                fontSize: 24,
                                                color: `${theme?.theme === 'dark' ? '#7dd3fc' : '#0c4a6e'}`
                                            }}
                                        />
                                    }
                                </div>
                            </div>
                        </button>
                    </Tooltip>

                    <Tooltip
                        title={<h1 className='text-lg text-center'>{currentLang === 'us-en' ? `Embedded Games` : 'Jogos incorporados da internet.'} <p className='font-bold text-sky-200'>{currentLang === 'us-en' ? `They may contain ads!` : 'Pode conter anúncios!'}</p></h1>}
                        arrow
                        disableInteractive
                    >
                        <button onClick={handleShowingInternetGames}>
                            <div className='p-2 flex flex-row gap-4 justify-center items-center border rounded-md shadow-lg border-slate-700 dark:border-slate-300'>
                                <p className='text-base font-bold'>{currentLang === 'us-en' ? `Internet Games:` : 'Jogos da Internet:'}</p>
                                <div className="bg-sky-300 dark:bg-slate-800 rounded-full shadow-lg">
                                    {isInternetGamesShowing === true ?
                                        <CheckBoxIcon
                                            sx={{
                                                fontSize: 24,
                                                color: `${theme?.theme === 'dark' ? '#7dd3fc' : '#0c4a6e'}`
                                            }}
                                        />
                                        :
                                        <CheckBoxOutlineBlankIcon
                                            sx={{
                                                fontSize: 24,
                                                color: `${theme?.theme === 'dark' ? '#7dd3fc' : '#0c4a6e'}`
                                            }}
                                        />
                                    }
                                </div>
                            </div>
                        </button>
                    </Tooltip>
                </div>

            </div>

            <hr className={`h-full border border-slate-700 dark:border-slate-300 ${!isInternetGamesShowing && !isMyGamesShowing ? 'max-laptop:hidden' : ''}`} />

            {games.map((game) => {
                const conditions = (game.developedBy === 'internet' && isInternetGamesShowing) || (game.developedBy === 'jeffs' && isMyGamesShowing) || (!isInternetGamesShowing && !isMyGamesShowing)

                if (conditions) {
                    return (
                        <div
                            className={`
                                p-4 min-w-[20vw] h-full border border-slate-700 dark:border-slate-300 rounded-md shadow-lg
                                ${!isInternetGamesShowing && !isMyGamesShowing ? 'max-laptop:hidden' : ''}
                            `}
                        >
                            <div className="h-full flex flex-col gap-12 max-laptop:gap-6 justify-center items-center">
                                <h1 className="text-2xl max-laptop:text-lg text-center font-bold underline">{game.title}</h1>
                                <button onClick={() => handleGameDialogOpen(game)}>
                                    <img className='size-72 max-laptop:size-24 border-2 border-slate-700 dark:border-slate-300 rounded-md' src={game.img} alt={game.title}/>
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