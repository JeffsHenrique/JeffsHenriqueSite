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
                    summary: t({
                        en: "Web solution for transcription and synchronization of subtitles.",
                        "pt-BR": "Solução web para transcrição e sincronização de legendas.",
                    }),
                    project_details: t({
                        en: "Authentication;\n\n Home page with video upload;\n\n Transcription screen: pause/unpause video, increase/decrease speed, boost up 400% of the audio, download in .txt or .srt format;\n\n Synchronization screen: synchronize subtitles, fast subtitle management, waveform, spell check for grammar errors (Portuguese or English), download subtitles in .srt format.",
                        "pt-BR": "Sistema de autenticação;\n\n Tela inicial com upload de vídeo;\n\n Tela de transcrição: pausar/despausar vídeo, aumentar/diminuir a velocidade, aumentar o som até 400%, marcações de tags, download em formato .txt ou .srt;\n\n Tela de sincronia: sincronizar legendas, edição rápida da legenda, ondas sonoras, spell check para erros (português ou inglês), download das legendas em formato .srt.",
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
                    summary: t({
                        en: "Web solution for visualization of dynamic charts of mTs sensors.",
                        "pt-BR": "Sistema para visualização de gráficos dinâmicos dos sensores mTs."
                    }),
                    project_details: t({
                        en: "Development of a web frontend, using Firebase as a BAAS\n\nRefactoring of the sensors' management site, using React-Router/Vite\n\nImplementation of authentication and customer/product registration screens.",
                        "pt-BR": "Desenvolvimento web frontend, utilizando Firebase como BAAS\n\nReformulação do site de gerenciamento de sensores, utilizando React-Router/Vite\n\nImplementação de telas de autenticação e cadastro de clientes/produtos.",
                    }),
                    techs_used: t({
                        en: "React-Router/Vite, React with TypeScript, ShadcnUI and Firebase as a BAAS",
                        "pt-BR": "React-Router/Vite, React com TypeScript, ShadcnUI e Firebase como BAAS",
                    }),
                }
            },
            rick_and_morty: {
                title: t({
                    en: "Rick And Morty • Interdimensional Game",
                    "pt-BR": "Rick And Morty • Jogo Interdimensional",
                }),
                image_alt: t({
                    en: "Sequence of pictures of Rick and Morty game",
                    "pt-BR": "Sequência de fotos do jogo do Rick and Morty",
                }),
                description: {
                    summary: t({
                        en: "A text-based mystery adventure game inspired by Rick and Morty's interdimensional adventures.",
                        "pt-BR": "Um jogo de aventura de texto inspirado nas aventuras interdimensionais do Rick and Morty.",
                    }),
                    project_details: t({
                        en: "Terminal UI - Retro terminal styling with multiple themes (Matrix Green, Cyber Cyan, Warm Amber, etc.)\n\nAI-Powered Story - Dynamic narrative generated by AI via OpenRouter\n\nMulti-language - Play in English, Portuguese, or Spanish\n\nTyping Animation - Character-by-character typewriter effect\n\nMultiple API Keys - Automatic fallback when keys/models fail\n\nCosmic Background - Animated starfield with portal gun colors",
                        "pt-BR": "Interface – Terminal estilo retrô com múltiplos temas (Verde Matrix, Ciano Cyber, Âmbar Quente, etc.)\n\nHistória com IA – Narrativa dinâmica gerada por IA via OpenRouter\n\nMultilíngue – Jogue em inglês, português ou espanhol\n\nAnimação de Digitação – Efeito máquina de escrever caractere por caractere\n\nMúltiplas Chaves de API – Fallback automático quando chaves/modelos falham\n\nFundo Cósmico – Campo estrelado animado com as cores da portal gun",
                    }),
                    techs_used: t({
                        en: "Next.js 16, Typescript, Tailwind CSS + shadcn/ui, OpenRouter AI SDK, Vercel deployment ready.",
                        "pt-BR": "Next.js 16, Typescript, Tailwind CSS + shadcn/ui, OpenRouter AI SDK, Vercel deployment ready.",
                    }),
                }
            },
            adult_game: {
                title: t({
                    en: "Adult Game",
                    "pt-BR": "Jogo Adulto",
                }),
                image_alt: t({
                    en: "Sequence of pictures of Adult Game",
                    "pt-BR": "Sequência de fotos do Jogo Adulto",
                }),
                description: {
                    summary: t({
                        en: "A daily browser-based game where you receive a random salary and must decide which bills to pay.",
                        "pt-BR": "Um jogo diário onde você recebe um salário aleatório e precisa decidir quais boletos pagar.",
                    }),
                    project_details: t({
                        en: "Each day you get a random salary (from R$800 to R$25,000)\n\nA set of 5-8 bills is generated from an extensible pool (essential + discretionary)\n\nThe total of all bills always exceeds your salary — you can't pay everything\n\nChoose which bills to pay and submit your selection\n\nAfter playing, you can compare your answer with the \"correct\" one\n\nOne play per day — resets at midnight Brasília time (UTC-3)",
                        "pt-BR": "Cada dia você recebe um salário aleatório (de R$800 a R$25.000)\n\nUm conjunto de 5 a 8 contas é gerado a partir de um conjunto expansível (essenciais + discricionárias)\n\nO total de todas as contas sempre excede seu salário — você não pode pagar tudo\n\nEscolha quais contas pagar e envie sua seleção\n\nDepois de jogar, você pode comparar sua resposta com a \"correta\"\n\nUma jogada por dia — reinicia à meia-noite no horário de Brasília (UTC-3)",
                    }),
                    techs_used: t({
                        en: "React 18 + Typescript + Vite, Tailwind CSS, i18next for EN/PT-BR localization, Zustand for state management, Supabase for daily play tracking, Vitest for unit tests, Playwright for E2E tests.",
                        "pt-BR": "React 18 + Typescript + Vite, Tailwind CSS, i18next para EN/PT-BR localization, Zustand para gerenciamento de estado, Supabase para acompanhamento diário, Vitest para testes unitários, Playwright para testes e2e.",
                    }),
                }
            },
        },
    }
} satisfies Dictionary

export default projectsContent