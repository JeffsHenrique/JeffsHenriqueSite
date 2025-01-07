export interface CurrentProject {
    name: string
    img: string[]
    desc: string
    deadline: {
        start: string
        end?: string
        handIn: string
    }
}