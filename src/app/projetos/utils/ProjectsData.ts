import type { Project } from "../types/Project";

// assets
import pokedex1 from '../assets/pokedex-1.png'
import pokedex2 from '../assets/pokedex-2.png'
import pokedex3 from '../assets/pokedex-3.png'
import pokedexGif1 from '../assets/pokedexgif-1.gif'
import memoryCow1 from '../assets/memorycow-1.png'
import memoryCow2 from '../assets/memorycow-2.png'
import jamilleSubs1 from '../assets/jamillesubs-1.png'
import jamilleSubs2 from '../assets/jamillesubs-2.png'
import jamilleSubs3 from '../assets/jamillesubs-3.png'
import jamilleSubs4 from '../assets/jamillesubs-4.png'
import jamilleSubs5 from '../assets/jamillesubs-5.png'
import jamilleSubs6 from '../assets/jamillesubs-6.png'
import jamilleSubsGif1 from '../assets/jamillesubsgif-1.gif'
import miraPortfolio1 from '../assets/miraportfolio-1.png'
import miraPortfolio2 from '../assets/miraportfolio-2.png'
import miraPortfolio3 from '../assets/miraportfolio-3.png'

class ProjectsData {
    getProjects(): Promise<Project[]> {
        const currentLang = localStorage.getItem('LangContextKey')

        const projects: Project[] = [
            {
                title: 'Pokedex',
                projectLevel: 1,
                images: [
                    pokedex1.src,
                    pokedex2.src,
                    pokedex3.src,
                    pokedexGif1.src,
                ],
                imageAlt: `${currentLang === 'us-en' ? `Sequence of pictures of my Pokedex project` : 'Sequência de fotos do meu projeto Pokedex'}`,
                description: {
                    projectDetails: `${currentLang === 'us-en' ? `This project was made following a youtube video. It was really special because I did it with little knowledge in JavaScript.` : 'Esse projeto foi feito seguindo um vídeo do youtube. Foi muito especial, pois o realizei apenas com um breve conhecimento em JavaScript.'}`,
                    techsUsed: `JavaScript, HTML ${currentLang === 'us-en' ? `and` : 'e'} CSS`
                },
                externalLinks: {
                    projectLink: 'https://jeffshenrique.github.io/pokedex/',
                    ref: {
                        name: 'Como criar uma Pokedex com HTML, CSS e JavaScript | Projeto Completo',
                        link: 'https://www.youtube.com/watch?v=SjtdH3dWLa8',
                    }
                },
            },
            {
                title: 'Memory Cow Game',
                projectLevel: 1,
                images: [
                    memoryCow1.src,
                    memoryCow2.src
                ],
                imageAlt: `${currentLang === 'us-en' ? `Sequence of pictures of my Memory Cow Game project` : 'Sequência de fotos do meu projeto Jogo da Memória de Vaca'}`,
                description: {
                    projectDetails: `${currentLang === 'us-en' ? `This project was made from my React with TypeScript classes, taught by Bonieky. I changed the icons to give it my own aesthetic ^^` : 'Esse projeto foi feito a partir das aulas de React com TypeScript do professor Bonieky. Alterei os ícones para deixá-los do meu jeito ^^'}`,
                    techsUsed: `TypeScript, HTML ${currentLang === 'us-en' ? `and` : 'e'} CSS`
                },
                externalLinks: {
                    projectLink: 'https://memory-cow-game.vercel.app/',
                    ref: {
                        name: 'B7Web',
                        link: 'https://lp.b7web.com.br/'
                    }
                },
            },
            {
                title: `Jamille Subs ${currentLang === 'us-en' ? `(WORKING)` : '(EM CONSTRUÇÃO)'}`,
                projectLevel: 4,
                images: [
                    jamilleSubsGif1.src,
                    jamilleSubs1.src,
                    jamilleSubs2.src,
                    jamilleSubs3.src,
                    jamilleSubs4.src,
                    jamilleSubs5.src,
                    jamilleSubs6.src,
                ],
                imageAlt: `${currentLang === 'us-en' ? `Sequence of pictures of my Jamille Subs project` : 'Sequência de fotos do meu projeto Jamille Subs'}`,
                description: {
                    projectDetails: `${currentLang === 'us-en' ? `At first, this project was thought only to help me with my subtitles freelancer jobs. The last image is the project developed using only HTML, CSS and JavaScript (before I get more understanding in React). It's still in progress, with lots of ideas that will require more study. Some of my goals are: An authentication system (with users registered in a database); an AI manipulation, to generate the automatic transcription of the videos; a text substitution when transcribing; a synchronization system, using only front-end; and so on!` : 'Esse projeto foi pensado, inicialmente, apenas para me ajudar com trabalhos autônomos de legendagem. A última imagem é o projeto desenvolvido apenas com HTML, CSS e JavaScript (antes de eu adquirir mais conhecimentos em react). Ainda está em construção, com muitas ideias que requerem mais estudos. Alguns dos meus objetivos são: sistema de autenticação (com pessoas cadastradas em um banco de dados); manipulação com IA para realizar a transcrição automática de vídeos; substituição de texto na transcrição; sistema de sincronia utilizando front-end; dentre outros!'}`,
                    techsUsed: `Next.js, React com TypeScript ${currentLang === 'us-en' ? `and` : 'e'} TailwindCss`
                },
                externalLinks: {
                    projectLink: 'https://jamille-subs-fe.vercel.app/'
                }
            },
            {
                title: 'Mira - Website Portfolio',
                projectLevel: 2,
                images: [
                    miraPortfolio2.src,
                    miraPortfolio1.src,
                    miraPortfolio3.src,
                ],
                imageAlt: `${currentLang === 'us-en' ? `Sequence of pictures of Mira's portfolio website` : 'Sequência de fotos do site portfolio da Editora de Vídeos Mira Agda'}`,
                description: {
                    projectDetails: `${currentLang === 'us-en' ? `This site was developed to be an online portfolio of the professional, Mira Agda, skilled in post-production and VFX of audiovisual works. Considering her interests and ideas, we sketch how the site would look like and which ideas were essential to be in her site, such as an option for the user to choose the language: Portuguese or English.` : 'Esse site foi criado com a finalidade de ser um portfolio online para a profissional Mira Agda, especializada em pós-produção de obras audiovisuais. Alinhando com os interesses dela, desenhamos o site como ficaria e quais ideias eram essenciais, como a opção do site português e inglês.'}`,
                    techsUsed: `Next.js, React com TypeScript, Material UI ${currentLang === 'us-en' ? `and` : 'e'} TailwindCss`
                },
                externalLinks: {
                    projectLink: 'https://miracampos.vercel.app/'
                }
            },
        ]

        return Promise.resolve(projects)
    }
}

export const projectsData = new ProjectsData()