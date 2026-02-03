"use client"

import { Dialog, DialogContent, DialogTitle } from "@mui/material"
import { useEffect, useRef } from "react"

export interface GameProps {
    open: boolean
    onClose: () => void
    title: string,
    source: string
}

export const GameDialog = (props: GameProps) => {
    const { open, onClose, title, source } = props
    const iframeRef = useRef<HTMLIFrameElement>(null)

    const handleClose = () => {
        onClose()
    }

    useEffect(() => {
        if (open && iframeRef.current) {
            iframeRef.current.focus()
        }
    }, [open])

    return (
        <Dialog onClose={handleClose} open={open} maxWidth='lg'>
            <div className="overflow-auto border-2 rounded-md border-slate-700 dark:border-slate-300 bg-sky-100 dark:bg-slate-900">
                <DialogTitle className="text-sky-900 dark:text-sky-200 my-4 flex justify-center">
                    <p className="text-2xl max-laptop:text-lg font-bold">{title}</p>
                </DialogTitle>

                <DialogContent dividers>
                    <div className="flex justify-center items-center gap-12 text-sky-900 dark:text-sky-200">
                        <div className="border-2 rounded-md border-slate-700 dark:border-slate-300 bg-slate-200 shadow-lg">
                            <iframe
                            ref={iframeRef}
                            className="w-[1080px] min-h-[100vh] max-laptop:w-[80vw]"
                            title={title}
                            src={source}
                            tabIndex={0}
                            onLoad={() => iframeRef.current?.focus()}
                        ></iframe>
                        </div>
                    </div>
                </DialogContent>
            </div>
        </Dialog>
    )
}