export const formatPeriod = (dd: number, mm: number, yyyy: number) => {
    let date = new Date(`${mm.toString()}/${dd.toString()}/${yyyy.toString()}`)

    const newDate = `${("0" + date.getDate()).slice(-2)}/${("0" + (date.getMonth() + 1)).slice(-2)}/${date.getFullYear()}`

    return newDate
}

export const formatCurrentDate = () => {
    let date = new Date()

    const newDate = `${("0" + date.getDate()).slice(-2)}/${("0" + (date.getMonth() + 1)).slice(-2)}/${date.getFullYear()}`

    return newDate
}