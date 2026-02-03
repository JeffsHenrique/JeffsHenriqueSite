import brazilFlag from '@/app/assets/Flag_of_Brazil.png'
import unitedStatesFlag from '@/app/assets/Flag_of_USA.png'

import { Button, MenuItem } from "@mui/material"
import LanguageIcon from '@mui/icons-material/Language';
import { useLang } from "../contexts/LanguageContext"
import { StyledButton, StyledMenuDark, StyledMenuLight } from '../utils/StyledMaterialComponents'
import { useTheme } from '../contexts/ThemeContext'
import React, { useState } from 'react'

const LanguageSwitch = () => {
    const theme = useTheme()
    const langCtx = useLang()
    const [anchorButtonEl, setAnchorButtonEl] = useState<HTMLElement | null>(null)

    const open = Boolean(anchorButtonEl)

    const handleLanguageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorButtonEl(event.currentTarget)
    }

    const handleLanguageButtonClose = () => {
        setAnchorButtonEl(null)
    }

    const handleBRLang = () => {
        if (langCtx) {
            langCtx.setLang('pt-br')
            location.reload()
        }
    }

    const handleENLang = () => {
        if (langCtx) {
            langCtx.setLang('us-en')
            location.reload()
        }
    }

    return (
        <div className="flex flex-row">
            <StyledButton
                id='language-button'
                aria-controls={open ? 'language-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open? 'true' : undefined}
                onClick={handleLanguageButtonClick}
            >
                <LanguageIcon fontSize='large'/>
            </StyledButton>

            {theme?.theme === 'dark' ?
                <StyledMenuDark
                    id='language-menu'
                    anchorEl={anchorButtonEl}
                    open={open}
                    onClose={handleLanguageButtonClose}
                    MenuListProps={{
                        'aria-labelledby': 'language-button'
                    }}
                >
                    <MenuItem onClick={handleBRLang}>
                        <Button>
                            <img className='w-8 border rounded-md border-sky-500' src={brazilFlag.src} alt='Bandeira do Brasil' />
                        </Button>
                    </MenuItem>
                    <MenuItem onClick={handleENLang}>
                        <Button>
                            <img className='w-8 border rounded-md border-sky-500' src={unitedStatesFlag.src} alt='USA Flag' />
                        </Button>
                    </MenuItem>
                </StyledMenuDark>
            :
                <StyledMenuLight
                    id='language-menu'
                    anchorEl={anchorButtonEl}
                    open={open}
                    onClose={handleLanguageButtonClose}
                    MenuListProps={{
                        'aria-labelledby': 'language-button'
                    }}
                >
                    <MenuItem onClick={handleBRLang}>
                        <Button>
                            <img className='w-8 border rounded-md border-sky-500' src={brazilFlag.src} alt='Bandeira do Brasil' />
                        </Button>
                    </MenuItem>
                    <MenuItem onClick={handleENLang}>
                        <Button>
                            <img className='w-8 border rounded-md border-sky-500' src={unitedStatesFlag.src} alt='USA Flag' />
                        </Button>
                    </MenuItem>
                </StyledMenuLight>
            }

        </div>
    )
}

export default LanguageSwitch