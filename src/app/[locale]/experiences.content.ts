import { type Dictionary, t } from "intlayer"

const experiencesContent = {
    key: "experiences",
    content: {
        title: t({
            en: "My professional life",
            "pt-BR": "Minha vida profissional",
        }),
        filters: {
            filter_by: t({
                en: "Filter by:",
                "pt-BR": "Filtrar por:",
            }),
            study: t({
                en: "Study",
                "pt-BR": "Especialização",
            }),
            work: t({
                en: "Work",
                "pt-BR": "Trabalho",
            }),
            all: t({
                en: "All",
                "pt-BR": "Todos",
            }),
        },
        time_label: {
            year: t({
                en: "year",
                "pt-BR": "ano",
            }),
            years: t({
                en: "years",
                "pt-BR": "anos",
            }),
            month: t({
                en: "month",
                "pt-BR": "mês",
            }),
            months: t({
                en: "months",
                "pt-BR": "meses",
            }),
            less_than_one_month: t({
                en: "Less than 1 month",
                "pt-BR": "Menos de 1 mês",
            }),
            and: t({
                en: "and",
                "pt-BR": "e",
            }),
        },
        experiences: {
            current: t({
                en: "Current",
                "pt-BR": "Atualmente",
            }),
            main_tools: t({
                en: "Main Tools:",
                "pt-BR": "Principais Ferramentas:",
            }),

            // WORK
            work: {
                emsa_com: {
                    position: t({
                        en: "Frontend Web Developer",
                        "pt-BR": "Desenvolvedor Web Frontend",
                    }),
                    main_role: t({
                        en: "5 Months Temporary contract. Web frontend development, using Firebase as BAAS. Refactoring of mTs sensors' management site, using React-Router/Vite for the frontend: ➛ Implementing authentication and customer/product registration screens; ➛ Refactoring and improving the dashboard for dynamic graphics visualization; ➛ Improving the interface",
                        "pt-BR": "Contrato temporário de 5 meses. Desenvolvimento web frontend, utilizando Firebase como BAAS. Reformulação do site de gerenciamento de sensores mTs, utilizando React-Router/Vite para o Frontend: ➛ Implementação de telas de autenticação e cadastro de clientes/produtos; ➛ Reformulação e melhoria no dashboard para visualização de gráficos dinâmicos; ➛ Melhoria na interface.",
                    }),
                },
                prefeitura_campinas: {
                    position: t({
                        en: "Tech Support - Internship",
                        "pt-BR": "Técnico de suporte em TI",
                    }),
                    main_role: t({
                        en: "Tech support trainee, being responsible for: helping City Hall Department of Education users, with hardware and software; technical support to Education Departments, \"NAEDs\" and administrative departments, with the internet access, equipments, such as keyboard, mouse, printer, monitor), computers, notebooks, cromebooks, and tablets; Organizing cables and basic infrastructure; Approval of new equipments acquired directly from schools; assisting users by phone and e-mails; helping in maintenance of computers, notebooks and tablets from City Hall Department of Education",
                        "pt-BR": "Estagiário de suporte, tendo como principais atividades: Auxiliar os usuários da SME em suporte a Hardware e Software; Suporte técnico às Unidades Educacionais, aos NAEDs e aos prédios administrativos, referentes ao acesso à internet, aos periféricos (teclado, mouse, impressora, monitor), computadores, notebooks, cromebooks e tablets; Organização de cabos e infraestrutura básica; Homologação de equipamentos novos adquiridos diretamente pelas escolas; Auxiliar no atendimento ao usuário por telefone e também por e-mails; Auxiliar na manutenção dos computadores, notebooks e tablets adquiridos pela SME.",
                    }),
                },
                etc_filmes: {
                    position: t({
                        en: "Descriptive Subtitles - Freelancer",
                        "pt-BR": "Legendas Descritivas - Freelancer | Autônomo",
                    }),
                    main_role: t({
                        en: "As an audiovisual subtitler, I place all my knowledge throughout captions/subtitles for accessibility. Due to the lack of tools that could help me in video transcriptioning (the way I wanted, like go forward and backward in the video, change the speed, increase or decrease the volume, etc.), for this work, I developed a web application with those functionalities mentioned before. Beyond that, I installed locally Whisper from OpenAI to transcribe the videos automatically.",
                        "pt-BR": "Como legendador de obras audiovisuais, aplico todo meu conhecimento acerca das legendas voltadas para acessibilidade. Como não tinha nenhuma ferramenta que pudesse me auxiliar na transcrição dos vídeos (da maneira como eu desejava, podendo avançar e voltar o vídeo, mudar a velocidade, aumentar ou diminuir o volume, etc.), para este trabalho, desenvolvi uma aplicação voltada para as transcrições dos vídeos, além de transcrevê-los automaticamente usando o Whisper da OpenAI (instalada localmente).",
                    }),
                },
                showcase_qa: {
                    position: t({
                        en: "QA Analyst",
                        "pt-BR": "Analista de QA",
                    }),
                    main_role: t({
                        en: "As a QA Analyst at ShowCasePRO, I was responsible for monitoring and debugging a web application with multiple functionalities, including transcription, revision and synchronization of subtitles, medias management, user registration, and archived jobs. At first, I was focused on identify some enhancements in the website for redeveloping, and, over time, I took the responsibility of implementing visual designs upon oneself, such as a dark mode, which was users' request.",
                        "pt-BR": "Como Analista QA na ShowCasePRO, fui encarregado de monitorar e testar uma aplicação web interna com múltiplas funcionalidades, incluindo transcrição, revisão e sincronização de legendas, gerenciamento de mídias, cadastro de usuários e arquivamento de trabalhos. Inicialmente, concentrei-me em identificar melhorias para a reformulação do aplicativo, e, ao longo do tempo, assumi a responsabilidade pela implementação de recursos visuais, como a criação de um modo escuro, em resposta às solicitações dos usuários.",
                    }),
                },
                showcase_analyst: {
                    position: t({
                        en: "Audiovisual Production Analyst",
                        "pt-BR": "Analista de Produção Audiovisual",
                    }),
                    main_role: t({
                        en: "Besides the activities I did as a trainee, add now: Sheets management; welcoming and training new empolyees; responsible for receive and organize new audiovisual jobs from clients of TV Channels and producers, including TV program guide.",
                        "pt-BR": "Além das atividades realizadas no período de estágio, somam-se agora atividades como: gerenciamento de planilhas; treinamento e integração de novos estagiários; assuntos tratados diretamente com clientes das emissoras e produtoras; e recebimento e organização de demandas, tais como vídeos, áudios e grades de programação.",
                    }),
                },
                showcase_intern: {
                    position: t({
                        en: "Audiovisual Production Intern",
                        "pt-BR": "Estagiário de Produção Audiovisual",
                    }),
                    main_role: t({
                        en: "A company that provides technological equipments for accessibility: Closed Captioning generators, and Audiodescription providers for TV Channels, series and films. Main activities: Transcription and text review; Producing Closed Caption through speech recognition (company's software); and audiodescription script writing.",
                        "pt-BR": "Empresa fornecedora de equipamentos tecnológicos para acessibilidade: equipamentos geradores de Closed Caption e fornecedores de Audiodescrição para emissoras estatais e privadas, além de produtoras de séries e filmes. Principais atividades: digitação (decupagem), revisão e correção de textos; produção para gerar o Closed Caption por meio da voz (software próprio da empresa); e criação de roteiro e produção de Audiodescrição.",
                    }),
                },
                icasa: {
                    position: t({
                        en: "Administrative Assistant",
                        "pt-BR": "Auxiliar Administrativo",
                    }),
                    main_role: t({
                        en: "An agricultural company, specialized in soil and fertilizer. Main activities: typing of the results and printing of the report; customer's service; quality assurance (daily update of sheets, file control, etc).",
                        "pt-BR": "Empresa de agricultura de precisão, realizando análises em solos e fertilizantes em geral (comumente adubo e calcário). As principais atividades eram: digitação de resultados e impressão de laudos; atendimento ao cliente; controle de qualidade (atualização diária de planilhas, controle de arquivos, etc).",
                    }),
                },
            },

            // STUDY
            study: {
                puc_campinas: {
                    position: t({
                        en: "Letras: Portuguese / English",
                        "pt-BR": "Letras: PORTUGUÊS / INGLÊS",
                    }),
                    main_role: t({
                        en: "Bachelor's degree. Specialized in translation and review of many genders of texts, besides audiovisual productions. Deep knowledge of the grammar of both language, also considering some aspects, such as oratory skills. I also have the knowledge in Trados and Translations Memory.",
                        "pt-BR": "Formação BACHAREL. Especializado em tradução e revisão de textos de diversos gêneros, além de produções audiovisuais. Conhecimento das normas gramaticais dos dois idiomas, além das considerações linguísticas e de recursos da oratória. Possuo conhecimento na ferramenta Trados e em Memórias de Tradução.",
                    }),
                },
                esamc: {
                    position: t({
                        en: "Audiovisual Production (INCOMPLETE)",
                        "pt-BR": "Produção Audiovisual (INCOMPLETO)",
                    }),
                    main_role: t({
                        en: "Technologist in Audiovisual Production. I've had only two semesters, which were focused on digital medias, market research, scripting, audio, drawing, legislation of communication, web design, and others subjects. In the middle of the second semester, I decided to quit because I found what I wanted to study in the technology field.",
                        "pt-BR": "TECNÓLOGO em Produção Audiovisual. Tive apenas dois semestres focados em mídias digitais, pesquisa de mercado, roteiro, áudio, desenho, legislação em comunicação, web design, entre outras matérias. No meio do segundo semestre, decidi encerrar a faculdade por ter encontrado a vocação para a área de tecnologia e desenvolvimento de sistemas.",
                    }),
                },
                fam: {
                    position: t({
                        en: "Technologist in Systems Analysis and Development",
                        "pt-BR": "Análise e Desenvolvimento de Sistemas",
                    }),
                    main_role: t({
                        en: "Current studying. Prediction of graduation: Jun/2026",
                        "pt-BR": "Formação CURSO SUPERIOR DE TECNOLOGIA em Análise e Desenvolvimento de Sistemas. Cursando no momento. PREVISÃO DE FORMAÇÃO: 06/2026",
                    }),
                },
            }
        }
    }
} satisfies Dictionary

export default experiencesContent