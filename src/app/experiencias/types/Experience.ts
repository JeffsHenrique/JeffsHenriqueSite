export interface Experience {
    period: {
        start: string,
        end: string,
    },
    professionalType: string,
    isMyCurrentExperience?: boolean,
    positionName?: string,
    companyName?: string,
    mainRole?: string,
    photos?: string[]
    mainTools?: string
}