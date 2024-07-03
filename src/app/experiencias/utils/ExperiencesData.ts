import type { Experience } from "../types/Experience";

// assets
import etclegendas1 from '../assets/etclegendas-1.png'
import etclegendas2 from '../assets/etclegendas-2.png'
import showcaseanalista1 from '../assets/showcaseanalista-1.jpg'
import showcaseanalista2 from '../assets/showcaseanalista-2.jpg'
import showcaseanalista3 from '../assets/showcaseanalista-3.jpg'
import showcaseestagio1 from '../assets/showcaseestagio-1.jpg'
import showcaseestagio2 from '../assets/showcaseestagio-2.jpg'
import showcaseestagio3 from '../assets/showcaseestagio-3.jpg'
import esamcaudiovisual1 from '../assets/esamcaudiovisual-1.jpeg'
import esamcaudiovisual2 from '../assets/esamcaudiovisual-2.jpeg'
import esamcaudiovisual3 from '../assets/esamcaudiovisual-3.jpeg'
import esamcaudiovisual4 from '../assets/esamcaudiovisual-4.jpeg'
import esamcaudiovisual5 from '../assets/esamcaudiovisual-5.jpeg'
import esamcaudiovisual6 from '../assets/esamcaudiovisual-6.jpeg'
import esamcaudiovisual7 from '../assets/esamcaudiovisual-7.jpeg'

class ExperiencesData {
    getExperiences(): Promise<Experience[]> {

        const formatPeriod = (dd: number, mm: number, yyyy: number) => {
            let date = new Date(`${mm.toString()}/${dd.toString()}/${yyyy.toString()}`)

            const newDate = `${("0" + date.getDate()).slice(-2)}/${("0" + (date.getMonth() + 1)).slice(-2)}/${date.getFullYear()}`

            return newDate
        }

        const formatCurrentDate = () => {
            let date = new Date()

            const newDate = `${("0" + date.getDate()).slice(-2)}/${("0" + (date.getMonth() + 1)).slice(-2)}/${date.getFullYear()}`

            return newDate
        }

        const experiences: Experience[] = [

            // WORK EXPERIENCES
            {
                period: {
                    start: formatPeriod(1, 10, 2023),
                    end: formatCurrentDate(),
                },
                professionalType: "work",
                isMyCurrentExperience: true,
                positionName: 'Legendas Descritivas - Freelancer/Autônomo',
                companyName: 'ETC Filmes',
                mainRole: 'Como legendador de obras audiovisuais, aplico todo meu conhecimento acerca das legendas voltadas para acessibilidade e as aplico. Como não tinha nenhuma ferramenta que pudesse me auxiliar na transcrição dos vídeos (da maneira como eu desejava), para este trabalho, desenvolvi uma aplicação voltada para as transcrições dos vídeos, além de transcrevê-los automaticamente usando o Whisper da OpenAI (instalada localmente).',
                photos: [
                    etclegendas1.src,
                    etclegendas2.src,
                ],
                mainTools: 'Subtitle Edit, JamilleSubs, Whisper',
            },
            {
                period: {
                    start: formatPeriod(1, 2, 2023),
                    end: formatPeriod(30, 8, 2023)
                },
                professionalType: "work",
                positionName: 'Analista de QA',
                companyName: 'Showcase PRO',
                mainRole: 'Como Analista QA na ShowCasePRO, fui encarregado de monitorar e testar uma aplicação web interna com múltiplas funcionalidades, incluindo transcrição, revisão e sincronização de legendas, gerenciamento de mídias, cadastro de usuários e arquivamento de trabalhos. Inicialmente, concentrei-me em identificar melhorias para a reformulação do aplicativo, e, ao longo do tempo, assumi a responsabilidade pela implementação de recursos visuais, como a criação de um modo escuro, em resposta às solicitações dos usuários.',
                mainTools: 'React, Node, Material UI, Docker, Whisper, Figma, GitLab',
            },
            {
                period: {
                    start: formatPeriod(6, 1, 2020),
                    end: formatPeriod(31, 1, 2023)
                },
                professionalType: "work",
                positionName: 'Analista de Produção Audiovisual',
                companyName: 'Showcase PRO',
                mainRole: 'Além das atividades realizadas no período de estágio, somam-se agora atividades como: gerenciamento de planilhas; treinamento e integração de novos estagiários; assuntos tratados diretamente com clientes das emissoras e produtoras; e recebimento e organização de demandas, tais como vídeos, áudios e grades de programação.',
                photos: [
                    showcaseanalista1.src,
                    showcaseanalista2.src,
                    showcaseanalista3.src,
                ],
                mainTools: 'Google workspace (Sheets, Docs, Chat, Presentation, Meets), Premiere Pro, Whisper',
            },
            {
                period: {
                    start: formatPeriod(17, 12, 2017),
                    end: formatPeriod(31, 12, 2019)
                },
                professionalType: "work",
                positionName: 'Estagiário de Produção Audiovisual',
                companyName: 'Showcase PRO',
                mainRole: 'Empresa fornecedora de equipamentos tecnológicos para acessibilidade: equipamentos geradores de Closed Caption e fornecedores de Audiodescrição para emissoras estatais e privadas, além de produtoras de séries e filmes. Principais atividades: digitação (decupagem), revisão e correção de textos; produção para gerar o Closed Caption por meio da voz (software próprio da empresa); e criação de roteiro e produção de Audiodescrição.',
                photos: [
                    showcaseestagio1.src,
                    showcaseestagio2.src,
                    showcaseestagio3.src,
                ],
            },
            {
                period: {
                    start: formatPeriod(15, 8, 2013),
                    end: formatPeriod(15, 2, 2017)
                },
                professionalType: "work",
                positionName: 'Auxiliar Administrativo',
                companyName: 'ICASA - Instituto Campineiro de análise de Solo e Adubo',
                mainRole: 'Empresa de agricultura de precisão, realizando análises em solos e fertilizantes em geral (comumente adubo e calcário). As principais atividades eram: digitação de resultados e impressão de laudos; atendimento ao cliente; controle de qualidade (atualização diária de planilhas, controle de arquivos, etc).',
                photos: [
                    
                ],
            },

            // STUDY EXPERIENCES
            {
                period: {
                    start: formatPeriod(1, 2, 2017),
                    end: formatPeriod(29, 6, 2020)
                },
                professionalType: "study",
                positionName: 'Letras: PORTUGUÊS / INGLÊS',
                companyName: 'PUC Campinas',
                mainRole: 'Formação BACHAREL. Especializado em tradução e revisão de textos de diversos gêneros, além de produções audiovisuais. Conhecimento das normas gramaticais dos dois idiomas, além das considerações linguísticas e de recursos da oratória. Possuo conhecimento na ferramenta Trados e em Memórias de Tradução.',
            },
            {
                period: {
                    start: formatPeriod(1, 8, 2023),
                    end: formatPeriod(15, 3, 2024)
                },
                professionalType: "study",
                positionName: 'Produção Audiovisual (INCOMPLETO)',
                companyName: 'ESAMC',
                mainRole: 'TECNÓLOGO em Produção Audiovisual. Tive apenas dois semestres focados em mídias digitais, pesquisa de mercado, roteiro, áudio, desenho, legislação em comunicação, web design, entre outras matérias. No meio do segundo semestre, decidi encerrar a faculdade por ter encontrado a vocação para a área de tecnologia e desenvolvimento de sistemas.',
                photos: [
                    esamcaudiovisual1.src,
                    esamcaudiovisual2.src,
                    esamcaudiovisual3.src,
                    esamcaudiovisual4.src,
                    esamcaudiovisual5.src,
                    esamcaudiovisual6.src,
                    esamcaudiovisual7.src,
                ],
            },
            {
                period: {
                    start: formatPeriod(16, 3, 2024),
                    end: formatCurrentDate()
                },
                professionalType: "study",
                isMyCurrentExperience: true,
                positionName: 'Análise e Desenvolvimento de Sistemas',
                companyName: 'Centro Universitário FAM',
                mainRole: 'Formação CURSO SUPERIOR DE TECNOLOGIA em Análise e Desenvolvimento de Sistemas. Cursando no momento. PREVISÃO DE FORMAÇÃO: 06/2026',
            },
        ]

        return Promise.resolve(experiences)
    }
}

export const experiencesData = new ExperiencesData