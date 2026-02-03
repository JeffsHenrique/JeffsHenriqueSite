import type { CurrentProject } from "../types/CurrentProject";

import { formatPeriod } from "./DateFormatter";

// assets
import catTest from '@/app/images/cat.png'
import miraPortfolio1 from '@/app/assets/miraportfolio-2.png'

class CurrentProjectsData {
    getCurrentProjects(): Promise<CurrentProject[]> {
        const currentLang = localStorage.getItem('LangContextKey')

        const currentProjects: CurrentProject[] = [
            {
                name: `${currentLang === 'us-en' ? `Portfolio - Mira: Audiovisual Producer` : `Portfolio - Mira: Produtora Audiovisual`}`,
                img: [
                    catTest.src,
                    miraPortfolio1.src,
                ],
                desc: `${currentLang === 'us-en' ? `My babe's site!` : 'Site do meu amô'}`,
                deadline: {
                    start: formatPeriod(13, 1, 2025),
                    handIn: formatPeriod(31, 1, 2025),
                }
            },
        ]

        return Promise.resolve(currentProjects)
    }
}

export const currentProjectsData = new CurrentProjectsData()