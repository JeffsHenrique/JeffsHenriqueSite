import type { Ambition } from "../types/Ambition";
import javaIcon from '../assets/javaicon.png'
import phpIcon from '../assets/phpicon.png'
import angularIcon from '../assets/angular.png'
import nestJSIcon from '../assets/nestjs.png'

class AmbitionsData {
    getAmbitions(): Promise<Ambition[]> {
        const ambitions: Ambition[] = [
            {
                name: 'Angular',
                image: angularIcon.src
            },
            {
                name: 'Java',
                image: javaIcon.src
            },
            {
                name: 'NestJS',
                image: nestJSIcon.src
            },
            {
                name: 'PHP',
                image: phpIcon.src
            },
        ]

        return Promise.resolve(ambitions)
    }
}

export const ambitionsData = new AmbitionsData()