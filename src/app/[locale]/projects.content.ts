import { type Dictionary, t } from "intlayer"

const projectsContent = {
    key: "projects",
    content: {
        title: t({
            en: "Meet my projects!",
            "pt-BR": "Conheça os meus projetos!",
        }),
        swiper: {
            swipe: t({
                en: "Swipe it and see more images of the project.",
                "pt-BR": "Arraste para o lado e veja outras imagens do projeto.",
            }),
            click: t({
                en: "Click to open the image.",
                "pt-BR": "Clique para ampliá-las.",
            }),
            project_link: t({
                en: "Project Link",
                "pt-BR": "Link do projeto",
            }),
            ref: t({
                en: "References:",
                "pt-BR": "Referências:",
            }),
        },
        projects: {
            common_fields: {
                project_description: t({
                    en: "Project Description:",
                    "pt-BR": "Descrição do projeto:",
                }),
                tools_used: t({
                    en: "Tools used:",
                    "pt-BR": "Ferramentas utilizadas:",
                }),
                old_dashboard: t({
                    en: "Old Dashboard",
                    "pt-BR": "Dashboard Antigo",
                })
            },

            // PROJECTS
            jamille_subs: {
                title: t({
                    en: "Jamille Subs",
                    "pt-BR": "Jamille Subs",
                }),
                image_alt: t({
                    en: "Sequence of pictures of my Jamille Subs project",
                    "pt-BR": "Sequência de fotos do meu projeto Jamille Subs",
                }),
                description: {
                    project_details: t({
                        en: "At first, this project was thought only to help me with my subtitles freelancer jobs. It's still in progress to, in a near future, be commercialized. Currently, there are on this project: Authentication; Transcription screen, with real time functionalities, like pause/unpause video, increase/decrease speed, boost up 400% of the audio, download in .txt or .srt format; Synchronization screen, with real time functionalities to beyond transcription, like synchronize subtitles, fast subtitle management, waveform, spell check for grammar errors (in Portuguese or English), download subtitles in .srt format.",
                        "pt-BR": "Esse projeto foi pensado, inicialmente, apenas para me ajudar com trabalhos autônomos de legendagem. Ainda está em construção para, no futuro, ser comercializado. Atualmente, o projeto consiste em: Sistema de autenticação; Tela de transcrição, com funcionalidades em tempo real, como pausar/despausar o vídeo, aumentar/diminuir a velocidade, aumentar o som até 400%, marcações de tags, download em formato .txt ou .srt; Tela de sincronia, com funcionalidades em tempo real para além da transcrição, como sincronizar legendas, edição rápida da legenda, ondas sonoras, spell check para erros na legenda (com opção de dicionário em português ou inglês), download das legendas sincronizadas em formato .srt.",
                    }),
                    techs_used: t({
                        en: "Next.js, React, TypeScript, TailwindCss, Node.js, Express, Postgresql, Prisma, Docker",
                        "pt-BR": "Next.js, React, TypeScript, TailwindCss, Node.js, Express, Postgresql, Prisma, Docker",
                    }),
                }
            },
            dashboard_mts: {
                title: t({
                    en: "Dashboard - mTs Sensors",
                    "pt-BR": "Dashboard - mTs Sensores",
                }),
                image_alt: t({
                    en: "Sequence of pictures of Sensors' Dashboard",
                    "pt-BR": "Sequência de fotos do Dashboard dos Sensores",
                }),
                description: {
                    project_details: t({
                        en: "Development of a web frontend, using Firebase as a BAAS; Refactoring of the sensors' management site, using React-Router/Vite; Implementation of authentication and customer/product registration screens.",
                        "pt-BR": "Desenvolvimento web frontend, utilizando Firebase como BAAS; Reformulação do site de gerenciamento de sensores, utilizando React-Router/Vite; Implementação de telas de autenticação e cadastro de clientes/produtos.",
                    }),
                    techs_used: t({
                        en: "React-Router/Vite, React com TypeScript, ShadcnUI and Firebase as a BAAS",
                        "pt-BR": "React-Router/Vite, React com TypeScript, ShadcnUI e Firebase como BAAS",
                    }),
                }
            },
        },
    }
} satisfies Dictionary

export default projectsContent