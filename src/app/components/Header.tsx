"use client"

import * as React from 'react'
import { useState } from "react"
import { ThemeSwitch } from "./ThemeSwitch"
import { Contact } from "./Contact"

import HomeIcon from '@mui/icons-material/Home';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button, ButtonProps, Menu, MenuItem, MenuProps, styled } from "@mui/material";
import { useTheme } from '../contexts/ThemeContext'

const StyledMenuLight = styled((props: MenuProps) => (
    <Menu
        {...props}
    />
))(() => ({
    '& .MuiPaper-root': {
        background: '#7dd3fc'
    },
    '& .MuiMenuItem-root': {
        color: '#0c4a6e',
        transitionDuration: '0.4s',
        '&:hover': {
            backgroundColor: '#0d3652'
        }
    },
}))

const StyledMenuDark = styled((props: MenuProps) => (
    <Menu
        {...props}
    />
))(() => ({
    '& .MuiPaper-root': {
        background: '#0c4a6e'
    },
    '& .MuiMenuItem-root': {
        color: '#bae6fd',
        transitionDuration: '0.4s',
        '&:hover': {
            backgroundColor: '#0d3652'
        }
    },
}))

const StyledButton = styled(Button)<ButtonProps>(() => ({
    color: '#7dd3fc',
    fontWeight: 'bold'
}))

export const Header = () => {
    const [contactIsOpen, setContactIsOpen] = useState(false)
    const [anchorMenuEl, setAnchorMenuEl] = useState<null | HTMLElement>(null)

    const open = Boolean(anchorMenuEl)
    const theme = useTheme()

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
                                    Projetos
                                </MenuItem>
                            </a>

                            <a href="/conhecimentos">
                                <MenuItem onClick={handleMoreButtonClose}>
                                    Conhecimentos 
                                </MenuItem>
                            </a>

                            <a href="/experiencias">
                                <MenuItem onClick={handleMoreButtonClose}>
                                    Experiências
                                </MenuItem>
                            </a>

                            <MenuItem onClick={handleContactOpen}>Contato</MenuItem>

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
                                    Projetos
                                </MenuItem>
                            </a>

                            <a href="/conhecimentos">
                                <MenuItem onClick={handleMoreButtonClose}>
                                    Conhecimentos 
                                </MenuItem>
                            </a>

                            <a href="/experiencias">
                                <MenuItem onClick={handleMoreButtonClose}>
                                    Experiências
                                </MenuItem>
                            </a>

                            <MenuItem onClick={handleContactOpen}>Contato</MenuItem>

                            <MenuItem>
                                <ThemeSwitch />
                            </MenuItem>
                        </StyledMenuLight>
                    }
                </div>

                <div className="flex w-full justify-between max-laptop:hidden">
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