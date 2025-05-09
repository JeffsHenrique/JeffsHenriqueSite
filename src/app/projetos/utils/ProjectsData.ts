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
import jamilleSubs7 from '../assets/jamillesubs-7.png'
import jamilleSubs8 from '../assets/jamillesubs-8.png'
import jamilleSubs9 from '../assets/jamillesubs-9.png'
import jamilleSubs10 from '../assets/jamillesubs-10.png'
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
                    jamilleSubs10.src,
                    jamilleSubs9.src,
                    jamilleSubs7.src,
                    jamilleSubs8.src,
                ],
                imageAlt: `${currentLang === 'us-en' ? `Sequence of pictures of my Jamille Subs project` : 'Sequência de fotos do meu projeto Jamille Subs'}`,
                description: {
                    projectDetails: `${currentLang === 'us-en' ? `At first, this project was thought only to help me with my subtitles freelancer jobs. It's still in progress to, in a near future, be commercialized. Currently, there are on this project: Authentication; Transcription screen, with real time functionalities, like pause/unpause video, increase/decrease speed, boost up 400% of the audio, download in .txt or .srt format; Synchronization screen, with real time functionalities to beyond transcription, like synchronize subtitles, fast subtitle management, waveform, spell check for grammar errors (in Portuguese or English), download subtitles in .srt format.` : 'Esse projeto foi pensado, inicialmente, apenas para me ajudar com trabalhos autônomos de legendagem. Ainda está em construção para, no futuro, ser comercializado. Atualmente, o projeto consiste em: Sistema de autenticação; Tela de transcrição, com funcionalidades em tempo real, como pausar/despausar o vídeo, aumentar/diminuir a velocidade, aumentar o som até 400%, marcações de tags, download em formato .txt ou .srt; Tela de sincronia, com funcionalidades em tempo real para além da transcrição, como sincronizar legendas, edição rápida da legenda, ondas sonoras, spell check para erros na legenda (com opção de dicionário em português ou inglês), download das legendas sincronizadas em formato .srt.'}`,
                    techsUsed: `Next.js, React, TypeScript, TailwindCss, Node.js, Express, Postgresql, Prisma, Docker`
                },
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