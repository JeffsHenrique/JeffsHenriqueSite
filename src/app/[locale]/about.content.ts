import { type Dictionary, t } from "intlayer";

const aboutContent = {
    key: "about",
    content: {
        about_me: {
            title: t({
                en: "Fast, modern, and functional digital solutions!",
                "pt-BR": "Soluções digitais rápidas, modernas e funcionais!"
            }),
            texts: {
                text_1: t({
                    en: `With experience in full-stack web development and IT technical services, I serve small businesses, freelancers, residences, and offices that need performance, security, and reliability.`,
                    "pt-BR": "Com experiência em desenvolvimento web full stack e serviços técnicos de TI, atendo desde pequenos negócios e profissionais liberais até residências e escritórios que precisam de performance, segurança e confiabilidade."
                }),
                text_2: t({
                    en: `👨‍💻 Web development:`,
                    "pt-BR": "👨‍💻 Desenvolvimento Web:"
                }),
                text_3: t({
                    en: `I build custom web applications focused on performance, scalability, and responsive design. I use the main JavaScript and Python ecosystem technologies to deliver solid projects:`,
                    "pt-BR": "Crio aplicações web sob medida com foco em desempenho, escalabilidade e design responsivo. Utilizo as principais tecnologias do ecossistema JavaScript e Python para entregar projetos sólidos:"
                }),
                text_4: {
                    list_1: t({
                        en: `• Front-end: React, Next.js, TypeScript, Tailwind CSS`,
                        "pt-BR": "• Front-end: React, Next.js, TypeScript, Tailwind CSS"
                    }),
                    list_2: t({
                        en: `• Back-end: Node.js, Python (Django/Flask), REST and GraphQL APIs`,
                        "pt-BR": "• Back-end: Node.js, Python (Django/Flask), APIs REST e GraphQL"
                    }),
                    list_3: t({
                        en: `• Integrations: Databases (SQL/NoSQL), authentication, payments`,
                        "pt-BR": "• Integrações: Banco de dados (SQL/NoSQL), autenticação, pagamentos"
                    }),
                    list_4: t({
                        en: `• Optimization: SEO, performance (Lighthouse), accessibility, and clean code`,
                        "pt-BR": "• SEO, performance (Lighthouse), acessibilidade e código limpo"
                    }),
                },
                text_5: t({
                    en: `Whether it's a portfolio, an internal system, an e-commerce store, or an admin dashboard, I develop from scratch, handle maintenance, or modernize legacy projects.`,
                    "pt-BR": "Seja um portfólio, um sistema interno, um e-commerce ou um dashboard administrativo, desenvolvo do zero, faço manutenção ou modernizo projetos legados."
                }),
                text_6: t({
                    en: `🖥️ IT Services (Hardware & Maintenance):`,
                    "pt-BR": "🖥️ Serviços de TI (Hardware & Manutenção):"
                }),
                text_7: t({
                    en: `Is your computer freezing, running slow, or having physical issues? I offer complete technical support for desktops, laptops, and peripherals:`,
                    "pt-BR": "Seu computador travando, lento ou com problemas físicos? Ofereço suporte técnico completo para desktops, notebooks e periféricos:"
                }),
                text_8: {
                    list_1: t({
                        en: `• OS installation and formatting (Windows, Linux)`,
                        "pt-BR": "• Formatação e instalação de sistemas (Windows, Linux)"
                    }),
                    list_2: t({
                        en: `• Virus and malware diagnosis/removal, performance optimization`,
                        "pt-BR": "• Diagnóstico e remoção de vírus, malwares e otimização de desempenho"
                    }),
                    list_3: t({
                        en: `• Hardware replacement and cleaning (RAM, SSD, cooler, power supply, battery)`,
                        "pt-BR": "• Troca e limpeza de hardware (memória RAM, SSD, cooler, fonte, bateria)"
                    }),
                    list_4: t({
                        en: `• Component upgrades to extend machine lifespan and speed`,
                        "pt-BR": "• Upgrade de componentes para aumentar a vida útil e velocidade da máquina"
                    }),
                    list_5: t({
                        en: `• Network setup, backup, and file recovery`,
                        "pt-BR": "• Configuração de rede, backup e recuperação de arquivos"
                    }),
                },
                text_9: t({
                    en: `Take the opportunity to know more about my `,
                    "pt-BR": "Aproveite para conhecer um pouco dos meus "
                }),
                text_10: t({
                    en: `and`,
                    "pt-BR": "e"
                }),
                text_11: t({
                    en: `Feel free to `,
                    "pt-BR": "Fique à vontade para entrar em "
                }),
                text_12: t({
                    en: `me!`,
                    "pt-BR": "comigo!"
                }),
                text_13: t({
                    en: `Or, maybe, you can `,
                    "pt-BR": "Ou, se quiser, você também pode "
                }),
                text_14: t({
                    en: `take a break and have fun.`,
                    "pt-BR": "tirar um tempo para se divertir."
                }),
                text_15: t({
                    en: `Whether you need a professional website and/or a machine that runs like new, I'm ready to help.`,
                    "pt-BR": "Se você precisa de um site profissional e/ou de uma máquina que funcione como nova, estou pronto para ajudar."
                }),
            },
            links: {
                projects: t({
                    en: "projects",
                    "pt-BR": "projetos"
                }),
                skills: t({
                    en: "skills",
                    "pt-BR": "conhecimentos"
                }),
                experiences: t({
                    en: "experiences",
                    "pt-BR": "experiências"
                }),
                contact: t({
                    en: "contact",
                    "pt-BR": "contato"
                })
            }
        },
        photo_and_skills: {
            title_mobile: t({
                en: "Hello! Welcome to my website!",
                "pt-BR": "Olá! Sejam bem-vindos ao meu site!"
            }),
            professional_titles: t({
                en: `Web Developer | JavaScript and Typescript | React | Node`,
                "pt-BR": "Desenvolvedor Web | JavaScript e Typescript | React | Node"
            })
        }
    }
} satisfies Dictionary

export default aboutContent