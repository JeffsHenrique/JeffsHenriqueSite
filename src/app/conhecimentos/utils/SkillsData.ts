import type { Skill } from '../types/Skill'

import htmlIcon from '../assets/htmlicon.png'
import cssIcon from '../assets/cssicon.png'
import javascriptIcon from '../assets/javascripticon.png'
import typescriptIcon from '../assets/typescripticon.png'
import reactIcon from '../assets/reacticon.png'
import nodejsIcon from '../assets/nodeicon.png'
import pythonIcon from '../assets/pythonicon.png'
import tailwindcssIcon from '../assets/tailwindcssicon.png'
import gitIcon from '../assets/giticon.png'
import githubIcon from '../assets/githubicon.png'
import mysqlIcon from '../assets/mysqlicon.png'
import nextjsIcon from '../assets/nextjsicon.png'
import materialuiIcon from '../assets/materialuiicon.png'
import reactnativeIcon from '../assets/reactnativeicon.png'
import awsIcon from '../assets/awsicon.png'
import dockerIcon from '../assets/dockericon.png'
import kubernetesIcon from '../assets/kubernetesicon.png'
import aiIcon from '../assets/aiicon.png'
import googleCloudIcon2 from '../assets/googlecloud2.png'

import figmaIcon from '../assets/figmaicon.png'
import vscodeIcon from '../assets/vscodeicon.png'
import aftereffectsIcon from '../assets/aftereffectsicon.png'
import premiereproIcon from '../assets/premiereicon.png'
import illustratorIcon from '../assets/illustratoricon.png'
import photoshopIcon from '../assets/photoshopicon.png'
import revisaoIcon from '../assets/revisaoicon.png'
import subtitleeditIcon from '../assets/subtitleediticon.png'
import englishIcon from '../assets/englishicon.png'

class SkillsData {
    getSkills(): Promise<Skill[]> {
        const currentLang = localStorage.getItem('LangContextKey')

        const skills: Skill[] = [

            // DEV SKILLS

            {
                type: 'dev',
                name: 'HTML',
                image: htmlIcon.src,
                progressBar: {
                    progressLevel: 95,
                    color: '#E54C21'
                },
            },
            {
                type: 'dev',
                name: 'CSS',
                image: cssIcon.src,
                progressBar: {
                    progressLevel: 90,
                    color: '#214CE5'
                },
            },
            {
                type: 'dev',
                name: 'JavaScript',
                image: javascriptIcon.src,
                progressBar: {
                    progressLevel: 80,
                    color: '#F7E018'
                },
            },
            {
                type: 'dev',
                name: 'TypeScript',
                image: typescriptIcon.src,
                progressBar: {
                    progressLevel: 60,
                    color: '#007ACC'
                },
            },
            {
                type: 'dev',
                name: 'React',
                image: reactIcon.src,
                progressBar: {
                    progressLevel: 75,
                    color: '#7DDFFF'
                },
            },
            {
                type: 'dev',
                name: 'Node.js',
                image: nodejsIcon.src,
                progressBar: {
                    progressLevel: 30,
                    color: '#6FA660'
                },
            },
            {
                type: 'dev',
                name: 'Python',
                image: pythonIcon.src,
                progressBar: {
                    progressLevel: 30,
                    color: '#F7CE36'
                },
            },
            {
                type: 'dev',
                name: 'TailwindCss',
                image: tailwindcssIcon.src,
                progressBar: {
                    progressLevel: 85,
                    color: '#38BDF8'
                },
            },
            {
                type: 'dev',
                name: 'Git',
                image: gitIcon.src,
                progressBar: {
                    progressLevel: 70,
                    color: '#F34F29'
                },
            },
            {
                type: 'dev',
                name: 'Github',
                image: githubIcon.src,
                progressBar: {
                    progressLevel: 65,
                    color: '#f0f0f0'
                },
            },
            {
                type: 'dev',
                name: 'MySQL',
                image: mysqlIcon.src,
                progressBar: {
                    progressLevel: 40,
                    color: '#00618A'
                },
            },
            {
                type: 'dev',
                name: 'Next.js',
                image: nextjsIcon.src,
                progressBar: {
                    progressLevel: 55,
                    color: '#f0f0f0'
                },
            },
            {
                type: 'dev',
                name: 'MaterialUI',
                image: materialuiIcon.src,
                progressBar: {
                    progressLevel: 80,
                    color: '#00B0FF'
                },
            },
            {
                type: 'dev',
                name: 'VsCode',
                image: vscodeIcon.src,
                progressBar: {
                    progressLevel: 75,
                    color: '#0086D1'
                },
            },
            {
                type: 'dev',
                name: 'React Native',
                image: reactnativeIcon.src,
                progressBar: {
                    progressLevel: 20,
                    color: '#7DDFFF'
                },
            },
            {
                type: 'dev',
                name: 'Amazon AWS',
                image: awsIcon.src,
                progressBar: {
                    progressLevel: 20,
                    color: '#FF9900'
                },
            },
            {
                type: 'dev',
                name: 'Docker',
                image: dockerIcon.src,
                progressBar: {
                    progressLevel: 45,
                    color: '#0DB7ED'
                },
            },
            {
                type: 'dev',
                name: 'Kubernetes',
                image: kubernetesIcon.src,
                progressBar: {
                    progressLevel: 20,
                    color: '#0DB7ED'
                },
            },
            {
                type: 'dev',
                name: 'AI',
                image: aiIcon.src,
                progressBar: {
                    progressLevel: 15,
                    color: '#3A9DEE'
                },
            },
            {
                type: 'dev',
                name: 'Google Cloud',
                image: googleCloudIcon2.src,
                progressBar: {
                    progressLevel: 15,
                    color: '#E9C825'
                },
            },

            // OTHERS SKILLS
            {
                type: 'other',
                name: 'Figma',
                image: figmaIcon.src,
                progressBar: {
                    progressLevel: 70,
                    color: '#FF7262'
                },
            },
            {
                type: 'other',
                name: 'After Effects',
                image: aftereffectsIcon.src,
                progressBar: {
                    progressLevel: 60,
                    color: '#CB8BFF'
                },
            },
            {
                type: 'other',
                name: 'Premiere Pro',
                image: premiereproIcon.src,
                progressBar: {
                    progressLevel: 90,
                    color: '#8B8BFF'
                },
            },
            {
                type: 'other',
                name: 'Illustrator',
                image: illustratorIcon.src,
                progressBar: {
                    progressLevel: 50,
                    color: '#FF9A00'
                },
            },
            {
                type: 'other',
                name: 'Photoshop',
                image: photoshopIcon.src,
                progressBar: {
                    progressLevel: 50,
                    color: '#31A8FF'
                },
            },
            {
                type: 'other',
                name: `${currentLang === 'us-en' ? `Grammar Review` : 'Revisão Gramatical'}`,
                image: revisaoIcon.src,
                progressBar: {
                    progressLevel: 100,
                    color: '#DCEC0E'
                },
            },
            {
                type: 'other',
                name: `${currentLang === 'us-en' ? `Subtitles (CC | OC)` : 'Legendas (CC | OC)'}`,
                image: subtitleeditIcon.src,
                progressBar: {
                    progressLevel: 100,
                    color: '#CE2222'
                },
            },
            {
                type: 'other',
                name: `${currentLang === 'us-en' ? `English` : 'Inglês'}`,
                image: englishIcon.src,
                progressBar: {
                    progressLevel: 90,
                    color: '#EE382B'
                },
            },
        ]

        return Promise.resolve(skills)
    }
}

export const skillsData = new SkillsData()