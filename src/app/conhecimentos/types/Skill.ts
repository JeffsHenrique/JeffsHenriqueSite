export interface Skill {
    type: string,
    name: string,
    image: string,
    progressBar: {
        progressLevel: number,
        color: string
    }
}