import React, { ChangeEvent, FormEvent, useCallback, useEffect, useState } from "react"
import { SocialMedia } from "../types/SocialMedia"
import { socialMediasData } from "../utils/SocialMediasData"
import emailjs from '@emailjs/browser'
import { Backdrop, CircularProgress, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { dialogBox } from "../utils/Styles";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/ReactToastify.css'
import { useTheme } from "../contexts/ThemeContext";

export interface ContactDialogProps {
    open: boolean;
    onClose: () => void
}

export const Contact = (props: ContactDialogProps) => {
    const themeCtx = useTheme()
    const [socialMedias, setSocialMedias] = useState<SocialMedia[]>([])
    const [emailValue, setEmailValue] = useState<string>('')
    const [contentFormValue, setContentFormValue] = useState<string>('')
    const [shouldBackdropshow, setShouldBackdropShow] = useState<boolean>(false)

    const { onClose, open } = props

    const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
        setEmailValue(event.target.value)
    }

    const handleContentFormInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setContentFormValue(event.target.value)
    }

    const getSocialMedias = useCallback(async () => {
        try {
            const data = await socialMediasData.getSocialMedias()
            setSocialMedias(data)
        } catch (error) {
            console.error(error)
        }
    }, [])

    const sendEmail = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault()

        const form = event.target as HTMLFormElement

        if (emailValue && contentFormValue !== '') {
            handleBackdropOpen()

            emailjs.sendForm('service_oeh6rx5', 'template_p3ats8v', form, 'y4_ewEctVmh6Vywhn')
                .then(() => {
                    setEmailValue('')
                    setContentFormValue('')
                    const emailSent = () => {
                        toast.success('O e-mail foi enviado com sucesso! 😄', {
                            position: 'bottom-left',
                            autoClose: 3000,
                            style: {
                                backgroundColor: `${themeCtx?.theme === 'dark' ? '#020617' : '#0c4a6e'}`,
                                color: '#bae6fd'
                            },
                            className: 'max-tablet:text-sm max-tablet-w-48'
                        })
                    }
                    emailSent()
                    handleBackdropClose()
                },
                (error): void => {
                    toast.error('Ops, deu algum erro :(', {
                        position: 'bottom-left',
                            autoClose: 3000,
                            style: {
                                backgroundColor: `${themeCtx?.theme === 'dark' ? '#020617' : '#0c4a6e'}`,
                                color: '#bae6fd'
                            },
                            className: 'max-tablet:text-sm max-tablet-w-48'
                        })
                    console.log('Error: ', error)
                    handleBackdropClose()
                },
            )
        } else {
            toast.warn('Preencha os dois campos, por favor!', {
                position: 'bottom-left',
                autoClose: 3000,
                style: {
                    backgroundColor: `${themeCtx?.theme === 'dark' ? '#020617' : '#0c4a6e'}`,
                    color: '#bae6fd',
                },
                className: 'max-tablet:text-sm max-tablet-w-48'
            })
        }
    }

    const handleClose = () => {
        onClose()
    }

    const handleBackdropClose = () => {
        setShouldBackdropShow(false)
    }

    const handleBackdropOpen = () => {
        setShouldBackdropShow(true)
    }

    useEffect(() => {
        getSocialMedias()
    }, [getSocialMedias])

    return (
        <Dialog onClose={handleClose} open={open} fullWidth>
            <div className={dialogBox}>
                <DialogTitle className="text-sky-900 dark:text-sky-200 my-4 flex justify-center">
                    <p className="text-2xl max-tablet:text-lg text-center font-bold">Você pode me encontrar nas redes:</p>
                </DialogTitle>

                <DialogContent dividers>
                    <div className="flex max-mobile:flex-col justify-center items-center gap-12 max-mobile:gap-6 text-sky-900 dark:text-sky-200">
                        {socialMedias.map((socialMedia) => {
                            return (
                                <a className="flex flex-col justify-center items-center hover:scale-105 transition-all" href={`${socialMedia.href}`} target="_blank">
                                    <p className="text-xl max-tablet:text-base font-bold mb-2 underline">{socialMedia.name}</p>
                                    <img className="w-16 max-tablet:w-12" src={`${socialMedia.image}`} />
                                </a>
                            )
                        })}
                    </div>

                    <hr className="my-8 mx-2 border border-slate-700 dark:border-slate-300" />

                    <div className="text-sky-900 dark:text-sky-200 my-2 flex justify-center">
                        <p className="text-2xl max-tablet:text-lg text-center font-bold">Ou pode me mandar um e-mail:</p>
                    </div>

                    <div className="flex justify-center h-5/6">
                        <div className="m-2 p-2 w-10/12 gap-12 text-sky-900 dark:text-sky-200">
                            <form className="flex flex-col gap-3" onSubmit={sendEmail}>
                                <div className="flex flex-row max-laptop:flex-col gap-4 justify-start items-center">
                                    <label className="text-xl max-tablet:text-base text-center font-bold" htmlFor="emailFrom">Digite o seu e-mail:</label>
                                    <input
                                        className="my-2 p-2 w-6/12 text-center max-tablet:text-xs max-laptop:w-full h-8 rounded-md bg-sky-300 dark:bg-slate-950 border border-slate-700 dark:border-slate-300"
                                        type="text"
                                        name="email_from"
                                        value={emailValue}
                                        onChange={handleEmailInput}
                                    />
                                </div>

                                <label className="mt-8 text-xl max-tablet:text-base text-center font-bold" htmlFor="message">Escreva a sua mensagem:</label>
                                <textarea
                                    className="p-2 resize-none h-[32vh] max-tablet:text-xs rounded-md bg-sky-300 dark:bg-slate-950 border border-slate-700 dark:border-slate-300"
                                    name="message"
                                    value={contentFormValue}
                                    onChange={handleContentFormInput}
                                />
                                <div className="flex justify-center">
                                    <button
                                        className="text-2xl max-tablet:text-lg p-2 border border-slate-700 dark:border-slate-300 hover:scale-105 transition-all duration-300 bg-sky-300 hover:bg-sky-400 dark:bg-slate-800 hover:dark:bg-slate-700 rounded-md shadow-lg"
                                        type="submit"
                                    >
                                        Enviar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={shouldBackdropshow}
                    >
                        <CircularProgress color="inherit" />
                    </Backdrop>

                    <ToastContainer />
                </DialogContent>
            </div>
        </Dialog>
    )
}