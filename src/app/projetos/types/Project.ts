export interface Project {
    title: string,
    projectLevel: number, // 1 === small project / 2 === basic project / 3 === intermediate project / 4 === advanced project / 5 === complete project
    images: string[],
    imageAlt: string,
    description: {
        projectDetails: string,
        techsUsed: string
    },
    externalLinks?: {
        projectLink: string,
        ref?: {
            name: string,
            link?: string
        }
    }
}