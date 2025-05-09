import type { Experience } from "../types/Experience";

import { formatPeriod, formatCurrentDate } from "@/app/utils/DateFormatter";

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
        const currentLang = localStorage.getItem('LangContextKey')

        const experiences: Experience[] = [

            // WORK EXPERIENCES
            {
                period: {
                    start: formatPeriod(5, 3, 2025),
                    end: formatPeriod(10, 4, 2025),
                },
                professionalType: "work",
                positionName: `${currentLang === 'us-en' ? `Tech Support - Internship` : 'Técnico de suporte em TI'}`,
                companyName: 'Prefeitura Municipal de Campinas',
                mainRole: `${currentLang === 'us-en' ? `Tech support trainee, being responsible for: helping City Hall Department of Education users, with hardware and software; technical support to Education Departments, "NAEDs" and administrative departments, with the internet access, equipments, such as keyboard, mouse, printer, monitor), computers, notebooks, cromebooks, and tablets; Organizing cables and basic infrastructure; Approval of new equipments acquired directly from schools; assisting users by phone and e-mails; helping in maintenance of computers, notebooks and tablets from City Hall Department of Education` : 'Estagiário de suporte, tendo como principais atividades: Auxiliar os usuários da SME em suporte a Hardware e Software; Suporte técnico às Unidades Educacionais, aos NAEDs e aos prédios administrativos, referentes ao acesso à internet, aos periféricos (teclado, mouse, impressora, monitor), computadores, notebooks, cromebooks e tablets; Organização de cabos e infraestrutura básica; Homologação de equipamentos novos adquiridos diretamente pelas escolas; Auxiliar no atendimento ao usuário por telefone e também por e-mails; Auxiliar na manutenção dos computadores, notebooks e tablets adquiridos pela SME.'}`,
                mainTools: 'Windows 10, Powershell, TeamViewer',
            },
            {
                period: {
                    start: formatPeriod(1, 10, 2023),
                    end: formatCurrentDate(),
                },
                professionalType: "work",
                isMyCurrentExperience: true,
                positionName: `${currentLang === 'us-en' ? `Descriptive Subtitles - Freelancer` : 'Legendas Descritivas - Freelancer | Autônomo'}`,
                companyName: 'ETC Filmes',
                mainRole: `${currentLang === 'us-en' ? `As an audiovisual subtitler, I place all my knowledge throughout captions/subtitles for accessibility. Due to the lack of tools that could help me in video transcriptioning (the way I wanted, like go forward and backward in the video, change the speed, increase or decrease the volume, etc.), for this work, I developed a web application with those functionalities mentioned before. Beyond that, I installed locally Whisper from OpenAI to transcribe the videos automatically.` : 'Como legendador de obras audiovisuais, aplico todo meu conhecimento acerca das legendas voltadas para acessibilidade. Como não tinha nenhuma ferramenta que pudesse me auxiliar na transcrição dos vídeos (da maneira como eu desejava, podendo avançar e voltar o vídeo, mudar a velocidade, aumentar ou diminuir o volume, etc.), para este trabalho, desenvolvi uma aplicação voltada para as transcrições dos vídeos, além de transcrevê-los automaticamente usando o Whisper da OpenAI (instalada localmente).'}`,
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
                positionName: `${currentLang === 'us-en' ? `QA Analyst` : 'Analista de QA'}`,
                companyName: 'Showcase PRO',
                mainRole: `${currentLang === 'us-en' ? `As a QA Analyst at ShowCasePRO, I was responsible for monitoring and debugging a web application with multiple functionalities, including transcription, revision and synchronization of subtitles, medias management, user registration, and archived jobs. At first, I was focused on identify some enhancements in the website for redeveloping, and, over time, I took the responsibility of implementing visual designs upon oneself, such as a dark mode, which was users' request.` : 'Como Analista QA na ShowCasePRO, fui encarregado de monitorar e testar uma aplicação web interna com múltiplas funcionalidades, incluindo transcrição, revisão e sincronização de legendas, gerenciamento de mídias, cadastro de usuários e arquivamento de trabalhos. Inicialmente, concentrei-me em identificar melhorias para a reformulação do aplicativo, e, ao longo do tempo, assumi a responsabilidade pela implementação de recursos visuais, como a criação de um modo escuro, em resposta às solicitações dos usuários.'}`,
                mainTools: 'React, Node, Material UI, Docker, Whisper, Figma, GitLab',
            },
            {
                period: {
                    start: formatPeriod(6, 1, 2020),
                    end: formatPeriod(31, 1, 2023)
                },
                professionalType: "work",
                positionName: `${currentLang === 'us-en' ? `Audiovisual Production Analyst` : 'Analista de Produção Audiovisual'}`,
                companyName: 'Showcase PRO',
                mainRole: `${currentLang === 'us-en' ? `Besides the activities I did as a trainee, add now: Sheets management; welcoming and training new empolyees; responsible for receive and organize new audiovisual jobs from clients of TV Channels and producers, including TV program guide.` : 'Além das atividades realizadas no período de estágio, somam-se agora atividades como: gerenciamento de planilhas; treinamento e integração de novos estagiários; assuntos tratados diretamente com clientes das emissoras e produtoras; e recebimento e organização de demandas, tais como vídeos, áudios e grades de programação.'}`,
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
                positionName: `${currentLang === 'us-en' ? `Audiovisual Production Trainee` : 'Estagiário de Produção Audiovisual'}`,
                companyName: 'Showcase PRO',
                mainRole: `${currentLang === 'us-en' ? `A company that provides technological equipments for accessibility: Closed Captioning generators, and Audiodescription providers for TV Channels, series and films. Main activities: Transcription and text review; Producing Closed Caption through speech recognition (company's software); and audiodescription script writing.` : 'Empresa fornecedora de equipamentos tecnológicos para acessibilidade: equipamentos geradores de Closed Caption e fornecedores de Audiodescrição para emissoras estatais e privadas, além de produtoras de séries e filmes. Principais atividades: digitação (decupagem), revisão e correção de textos; produção para gerar o Closed Caption por meio da voz (software próprio da empresa); e criação de roteiro e produção de Audiodescrição.'}`,
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
                positionName: `${currentLang === 'us-en' ? `Administrative Assistant` : 'Auxiliar Administrativo'}`,
                companyName: 'ICASA - Instituto Campineiro de análise de Solo e Adubo',
                mainRole: `${currentLang === 'us-en' ? `An agricultural company, specialized in soil and fertilizer. Main activities: typing of the results and printing of the report; customer's service; quality assurance (daily update of sheets, file control, etc).` : 'Empresa de agricultura de precisão, realizando análises em solos e fertilizantes em geral (comumente adubo e calcário). As principais atividades eram: digitação de resultados e impressão de laudos; atendimento ao cliente; controle de qualidade (atualização diária de planilhas, controle de arquivos, etc).'}`,
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
                positionName: `${currentLang === 'us-en' ? `Letras: Portuguese / English` : 'Letras: PORTUGUÊS / INGLÊS'}`,
                companyName: 'PUC Campinas',
                mainRole: `${currentLang === 'us-en' ? `Bachelor's degree. Specialized in translation and review of many genders of texts, besides audiovisual productions. Deep knowledge of the grammar of both language, also considering some aspects, such as oratory skills. I also have the knowledge in Trados and Translations Memory.` : 'Formação BACHAREL. Especializado em tradução e revisão de textos de diversos gêneros, além de produções audiovisuais. Conhecimento das normas gramaticais dos dois idiomas, além das considerações linguísticas e de recursos da oratória. Possuo conhecimento na ferramenta Trados e em Memórias de Tradução.'}`,
            },
            {
                period: {
                    start: formatPeriod(1, 8, 2023),
                    end: formatPeriod(15, 3, 2024)
                },
                professionalType: "study",
                positionName: `${currentLang === 'us-en' ? `Audiovisual Production (INCOMPLETE)` : 'Produção Audiovisual (INCOMPLETO)'}`,
                companyName: 'ESAMC',
                mainRole: `${currentLang === 'us-en' ? `Technologist in Audiovisual Production. I've had only two semesters, which were focused on digital medias, market research, scripting, audio, drawing, legislation of communication, web design, and others subjects. In the middle of the second semester, I decided to quit because I found what I wanted to study in the technology field.` : 'TECNÓLOGO em Produção Audiovisual. Tive apenas dois semestres focados em mídias digitais, pesquisa de mercado, roteiro, áudio, desenho, legislação em comunicação, web design, entre outras matérias. No meio do segundo semestre, decidi encerrar a faculdade por ter encontrado a vocação para a área de tecnologia e desenvolvimento de sistemas.'}`,
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
                positionName: `${currentLang === 'us-en' ? `Technologist in Systems Analysis and Development` : 'Análise e Desenvolvimento de Sistemas'}`,
                companyName: 'Centro Universitário FAM',
                mainRole: `${currentLang === 'us-en' ? `Current studying. Prediction of graduation: Jun/2026` : 'Formação CURSO SUPERIOR DE TECNOLOGIA em Análise e Desenvolvimento de Sistemas. Cursando no momento. PREVISÃO DE FORMAÇÃO: 06/2026'}`,
            },
        ]

        return Promise.resolve(experiences)
    }
}

export const experiencesData = new ExperiencesData