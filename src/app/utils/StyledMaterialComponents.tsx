import { Button, ButtonProps, Menu, MenuProps, styled } from "@mui/material"

export const StyledMenuLight = styled((props: MenuProps) => (
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

export const StyledMenuDark = styled((props: MenuProps) => (
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

export const StyledButton = styled(Button)<ButtonProps>(() => ({
    color: '#7dd3fc',
    fontWeight: 'bold',
}))