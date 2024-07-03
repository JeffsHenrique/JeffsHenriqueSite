import type { Ambition } from "../types/Ambition";
import reactnativeIcon from '../assets/reactnativeicon.png'
import javaIcon from '../assets/javaicon.png'
import dockerIcon from '../assets/dockericon.png'
import phpIcon from '../assets/phpicon.png'
import aiIcon from '../assets/aiicon.png'
import awsIcon from '../assets/awsicon.png'


class AmbitionsData {
    getAmbitions(): Promise<Ambition[]> {
        const ambitions: Ambition[] = [
            {
                name: 'React Native',
                image: reactnativeIcon.src
            },
            {
                name: 'Java',
                image: javaIcon.src
            },
            {
                name: 'Docker',
                image: dockerIcon.src
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
                name: 'Amazon AWS',
                image: awsIcon.src
            },
        ]

        return Promise.resolve(ambitions)
    }
}

export const ambitionsData = new AmbitionsData()