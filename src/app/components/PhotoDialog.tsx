import { dialogBox } from "@/app/utils/Styles"
import { Dialog, DialogContent } from "@mui/material"

export interface PhotoProps {
    open: boolean
    onClose: () => void
    source: string
}

export const PhotoDialog = (props: PhotoProps) => {
    const { open, onClose, source } = props

    const handleClose = () => {
        onClose()
    }

    return (
        <Dialog onClose={handleClose} open={open} maxWidth='lg'>
            <div className={dialogBox}>
                <DialogContent dividers>
                    <div>
                        <img className="min-w-[40vw] rounded-lg" src={source} />
                    </div>
                </DialogContent>
            </div>
        </Dialog>
    )
}