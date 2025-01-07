import type { Ambition } from "../types/Ambition";
import javaIcon from '../assets/javaicon.png'
import phpIcon from '../assets/phpicon.png'
import aiIcon from '../assets/aiicon.png'
import angularIcon from '../assets/angular.png'
import googleCloudIcon2 from '../assets/googlecloud2.png'
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
            {
                name: 'AI',
                image: aiIcon.src
            },
            {
                name: 'Google Cloud',
                image: googleCloudIcon2.src
            },
        ]

        return Promise.resolve(ambitions)
    }
}

export const ambitionsData = new AmbitionsData()