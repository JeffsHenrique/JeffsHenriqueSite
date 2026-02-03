"use client"

import * as React from 'react'
import { useState } from "react"
import { ThemeSwitch } from "./ThemeSwitch"
import { Contact } from "./Contact"

import HomeIcon from '@mui/icons-material/Home';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { MenuItem } from "@mui/material";
import { useTheme } from '../contexts/ThemeContext'
import LanguageSwitch from './LanguageSwitch'
import { StyledMenuLight, StyledMenuDark, StyledButton } from '../utils/StyledMaterialComponents'

export const Header = () => {
    const [contactIsOpen, setContactIsOpen] = useState(false)
    const [anchorMenuEl, setAnchorMenuEl] = useState<null | HTMLElement>(null)

    const open = Boolean(anchorMenuEl)
    const theme = useTheme()
    const currentLang = localStorage.getItem('LangContextKey')

    const handleMoreButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorMenuEl(event.currentTarget)
    }

    const handleMoreButtonClose = () => {
        setAnchorMenuEl(null)
    }

    const handleContactOpen = () => {
        setContactIsOpen(!contactIsOpen)
        setAnchorMenuEl(null)
    }

    return (
        <>
            <header className="absolute top-0 p-2 w-full h-14 flex flex-row justify-start items-center gap-16 bg-sky-900 dark:bg-slate-950 text-sky-200 shadow-xl">
                <h1 className="px-4 hover:scale-110 hover:text-sky-300 transition-all duration-500">
                    <a href="/">
                        <HomeIcon sx={{ fontSize: 40 }} />
                    </a>
                </h1>

                <hr className="h-10 border opacity-35 border-slate-600 dark:border-slate-400 max-laptop:hidden" />

                <div className="hidden max-laptop:flex w-full justify-end">
                    <LanguageSwitch />

                    <StyledButton
                        id="more-button"
                        aria-controls={open ? 'more-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleMoreButtonClick}
                    >
                        <MoreHorizIcon sx={{ fontSize: 40 }} />
                    </StyledButton>

                    {theme?.theme === 'dark' ?
                        <StyledMenuDark
                            id="more-menu"
                            anchorEl={anchorMenuEl}
                            open={open}
                            onClose={handleMoreButtonClose}
                            MenuListProps={{
                                'aria-labelledby': 'more-button'
                            }}
                        >
                            <a href="/projetos">
                                <MenuItem onClick={handleMoreButtonClose}>
                                    {currentLang === 'us-en' ? 'Projects' : 'Projetos'}
                                </MenuItem>
                            </a>

                            <a href="/conhecimentos">
                                <MenuItem onClick={handleMoreButtonClose}>
                                    {currentLang === 'us-en' ? 'Skills' : 'Conhecimentos'}
                                </MenuItem>
                            </a>

                            <a href="/experiencias">
                                <MenuItem onClick={handleMoreButtonClose}>
                                    {currentLang === 'us-en' ? 'Experiences' : 'Experiências'}
                                </MenuItem>
                            </a>

                            <MenuItem onClick={handleContactOpen}>
                                {currentLang === 'us-en' ? 'Contact' : 'Contato'}
                            </MenuItem>

                            <MenuItem>
                                <ThemeSwitch />
                            </MenuItem>
                        </StyledMenuDark>

                        :

                        <StyledMenuLight
                            id="more-menu"
                            anchorEl={anchorMenuEl}
                            open={open}
                            onClose={handleMoreButtonClose}
                            MenuListProps={{
                                'aria-labelledby': 'more-button'
                            }}
                        >
                            <a href="/projetos">
                                <MenuItem onClick={handleMoreButtonClose}>
                                    {currentLang === 'us-en' ? 'Projects' : 'Projetos'}
                                </MenuItem>
                            </a>

                            <a href="/conhecimentos">
                                <MenuItem onClick={handleMoreButtonClose}>
                                    {currentLang === 'us-en' ? 'Skills' : 'Conhecimentos'}
                                </MenuItem>
                            </a>

                            <a href="/experiencias">
                                <MenuItem onClick={handleMoreButtonClose}>
                                    {currentLang === 'us-en' ? 'Experiences' : 'Experiências'}
                                </MenuItem>
                            </a>

                            <MenuItem onClick={handleContactOpen}>
                                {currentLang === 'us-en' ? 'Contact' : 'Contato'}
                            </MenuItem>

                            <MenuItem>
                                <ThemeSwitch />
                            </MenuItem>
                        </StyledMenuLight>
                    }
                </div>

                <div className="flex w-full justify-between max-laptop:hidden">
                    <ul className="flex flex-row items-center justify-end text-lg gap-8">
                        <li className="hover:scale-105 hover:text-sky-300 transition-all"><a href="/projetos"> {currentLang === 'us-en' ? 'Projects' : 'Projetos'} </a></li>
                        <li className="hover:scale-105 hover:text-sky-300 transition-all"><a href="/conhecimentos"> {currentLang === 'us-en' ? 'Skills' : 'Conhecimentos'} </a></li>
                        <li className="hover:scale-105 hover:text-sky-300 transition-all"><a href="/experiencias"> {currentLang === 'us-en' ? 'Experiences' : 'Experiências'} </a></li>
                        <li className="hover:scale-105 hover:text-sky-300 transition-all">
                            <button onClick={handleContactOpen}>
                                {currentLang === 'us-en' ? 'Contact' : 'Contato'}
                            </button>
                            <Contact
                                open={contactIsOpen}
                                onClose={handleContactOpen}
                            />
                        </li>
                    </ul>

                    <div className='flex justify-center items-center gap-4'>
                        <LanguageSwitch />

                        <ThemeSwitch />
                    </div>

                </div>

            </header>
        </>
    )
}