import { type Dictionary, t } from "intlayer"

const skillsContent = {
    key: "skills",
    content: {
        title_skills: t({
            en: "My knowledge and skills",
            "pt-BR": "Meus conhecimentos e habilidades",
        }),
        title_ambitions: t({
            en: "My ambitions",
            "pt-BR": "Minhas ambições",
        }),
        knowledges: {
            others: t({
                en: "Others skills",
                "pt-BR": "Outras skills",
            }),
            search_for: t({
                en: "Search for a specific skill :)",
                "pt-BR": "Procure por uma skill específica :)",
            }),

            // SKILLS
            skills: {
                grammar_review: {
                    name: t({
                        en: "Grammar Review",
                        "pt-BR": "Revisão Gramatical",
                    }),
                },
                subtitles: {
                    name: t({
                        en: "Subtitles (CC | OC)",
                        "pt-BR": "Legendas (CC | OC)",
                    }),
                },
                english: {
                    name: t({
                        en: "English",
                        "pt-BR": "Inglês",
                    }),
                },
            }
        },
        certificates: {
            title: t({
                en: "Certificates",
                "pt-BR": "Certificados",
            }),
            dialog_title: t({
                en: "My Certificates",
                "pt-BR": "Meus Certificados",
            }),
            description: t({
                en: "Here you can find all my certificates:",
                "pt-BR": "Aqui, você pode encontrar os meus certificados:",
            }),
            free_courses: t({
                en: "Free Courses",
                "pt-BR": "Cursos Livres",
            }),
        },
        progress: t({
            en: "Progress:",
            "pt-BR": "Progresso:",
        }),
        no_skills: t({
            en: "Your search didn't match any skill :(",
            "pt-BR": "Não foi encontrada a skill :(",
        }),
        tooltips: {
            click_to_open: t({
                en: "Click to open",
                "pt-BR": "Clique para abrir a",
            }),
            click_to_show_description: t({
                en: "Click here to show the description",
                "pt-BR": "Clique para ver a descrição",
            }),
            click_to_show_certificates: t({
                en: "Click here to show the certificates",
                "pt-BR": "Clique para ver os certificados",
            }),
        },
        proficiency_skills_helper: {
            title: t({
                en: "Skills Proficiency Scale",
                "pt-BR": "Escala de Proficiência de Skills",
            }),
            description: t({
                en: "Here, you can find the criteria on which my self-assessment in various technologies were based:",
                "pt-BR": "Aqui encontram-se os critérios nos quais foram baseadas as minhas avaliações interpessoais para as linguagens e tecnologias:",
            }),
            scale: {
                superficial: {
                    title: t({
                        en: "0% to 10% - Surface Understanding",
                        "pt-BR": "0% a 10% - Conhecimento Superficial",
                    }),
                    description: {
                        text_1: t({
                            en: "I've only seen some codes or barely heard of it;",
                            "pt-BR": "Apenas vi algum código ou ouvi falar;",
                        }),
                        text_2: t({
                            en: "I recognize the syntax or its basic concepts, but I can't manipulate it by myself.",
                            "pt-BR": "Reconheço a sintaxe ou conceitos básicos, mas não consigo aplicar sozinho.",
                        }),
                    }
                },
                basic: {
                    title: t({
                        en: "10% to 20% - Basics",
                        "pt-BR": "10% a 20% - Noções Básicas",
                    }),
                    description: {
                        text_1: t({
                            en: "I know the basics;",
                            "pt-BR": "Sei o básico;",
                        }),
                        text_2: t({
                            en: "I can understand simple examples and modify small pieces of code;",
                            "pt-BR": "Consigo entender exemplos simples e modificar pequenos trechos de código;",
                        }),
                        text_3: t({
                            en: "I need much guidance or consult references frequently.",
                            "pt-BR": "Preciso de muita orientação ou consultar referências frequentemente.",
                        }),
                    }
                },
                beginner: {
                    title: t({
                        en: "20% to 40% - Beginner",
                        "pt-BR": "20% a 40% - Iniciante",
                    }),
                    description: {
                        text_1: t({
                            en: "I can write simple codes with some guidance;",
                            "pt-BR": "Posso escrever código simples com orientação;",
                        }),
                        text_2: t({
                            en: "I'm aware of the basic functionalities and I can do simple tasks;",
                            "pt-BR": "Tenho conhecimento das funcionalidades básicas e consigo fazer tarefas simples;",
                        }),
                        text_3: t({
                            en: "I frequently need help or search it for solutions.",
                            "pt-BR": "Frequentemente preciso de ajuda ou de pesquisar soluções.",
                        }),
                    }
                },
                intermediate: {
                    title: t({
                        en: "40% to 60% - Intermediate",
                        "pt-BR": "40% a 60% - Intermediário",
                    }),
                    description: {
                        text_1: t({
                            en: "I can work independently on projects with a moderate level of complexity;",
                            "pt-BR": "Consigo trabalhar de forma independente em projetos de complexidade moderada;",
                        }),
                        text_2: t({
                            en: "I have a good understanding of its functionalities and good practices;",
                            "pt-BR": "Tenho um bom entendimento das funcionalidades e práticas comuns;",
                        }),
                        text_3: t({
                            en: "I can solve common problems without much trouble, and I can help beginners.",
                            "pt-BR": "Posso resolver problemas comuns sem muita dificuldade e ajudar iniciantes.",
                        }),
                    }
                },
                advanced: {
                    title: t({
                        en: "60% to 80% - Advanced",
                        "pt-BR": "60% a 80% - Avançado",
                    }),
                    description: {
                        text_1: t({
                            en: "I have expertise in using the technology for complex tasks;",
                            "pt-BR": "Tenho proficiência em usar a tecnologia para tarefas complexas;",
                        }),
                        text_2: t({
                            en: "I'm able to optimize and debug the code efficiently;",
                            "pt-BR": "Sou capaz de otimizar e depurar código de maneira eficiente;",
                        }),
                        text_3: t({
                            en: "I'm well informed of the best practices and patterns of the industry.",
                            "pt-BR": "Conheço bem as melhores práticas e padrões da indústria.",
                        }),
                    }
                },
                specialist: {
                    title: t({
                        en: "80% to 90% - Specialist",
                        "pt-BR": "80% a 90% - Especialista",
                    }),
                    description: {
                        text_1: t({
                            en: "A deep knowledge and experience in the technology;",
                            "pt-BR": "Profundo conhecimento e experiência na tecnologia;",
                        }),
                        text_2: t({
                            en: "I can deal with complex problems and I'm able to find strong solutions;",
                            "pt-BR": "Consigo lidar com problemas muito complexos e arquitetar soluções robustas;",
                        }),
                        text_3: t({
                            en: "I'm an expert in the subject and I can teach others.",
                            "pt-BR": "Sou referência no assunto e posso ensinar outros.",
                        }),
                    }
                },
                master: {
                    title: t({
                        en: "90% to 100% - Master",
                        "pt-BR": "90% a 100% - Mestre",
                    }),
                    description: {
                        text_1: t({
                            en: "Complete understanding of the skill;",
                            "pt-BR": "Domínio completo da tecnologia;",
                        }),
                        text_2: t({
                            en: "I'm able to create innovative and customizable solutions;",
                            "pt-BR": "Capaz de criar soluções inovadoras e personalizadas;",
                        }),
                        text_3: t({
                            en: "I contribute to the community and develop tools and frameworks;",
                            "pt-BR": "Contribuo para a comunidade e desenvolvo ferramentas e frameworks;",
                        }),
                        text_4: t({
                            en: "I have such a thorough understanding that I'm consider an authority in the subject.",
                            "pt-BR": "Tenho um entendimento tão profundo que sou considerado uma autoridade no assunto.",
                        }),
                    }
                },
            },
        }
    }
} satisfies Dictionary

export default skillsContent