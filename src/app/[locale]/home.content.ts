import { type Dictionary, t } from "intlayer";

const homeContent = {
    key: "home",
    content: {
        about_me: {
            title: t({
                en: "About me!",
                "pt-BR": "Quem sou eu?"
            }),
            texts: {
                text_1: t({
                    en: "I've been in love with technology since my childhood, but I only recently discovered just how much more fascinating this field can be.",
                    "pt-BR": "Apaixonado por computador desde a infância, descobri recentemente o quão mais apaixonante essa área pode ser."
                }),
                text_2: t({
                    en: "I enjoy putting my knowledge into practice, which I have gained through countless hours of study and experience.",
                    "pt-BR": "Gosto de colocar os conhecimentos em prática, estes adquiridos com estudo ou vivência."
                }),
                text_3: t({
                    en: `I'm also a very communicative person, and I'm always willing to understand the other person's needs.`,
                    "pt-BR": "Também sou uma pessoa bem comunicativa, estando sempre disposto a entender a outra parte."
                }),
                text_4: t({
                    en: `Take the opportunity to know more about my `,
                    "pt-BR": "Aproveite para conhecer um pouco dos meus "
                }),
                text_5: t({
                    en: `and`,
                    "pt-BR": "e"
                }),
                text_6: t({
                    en: `Feel free to `,
                    "pt-BR": "Fique à vontade para entrar em "
                }),
                text_7: t({
                    en: `me!`,
                    "pt-BR": "comigo!"
                }),
                text_8: t({
                    en: `Or, maybe, you can `,
                    "pt-BR": "Ou, se quiser, você também pode "
                }),
                text_9: t({
                    en: `take a break and have fun.`,
                    "pt-BR": "tirar um tempo para se divertir."
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
                "pt-BR": "Desenvolvedor Web | JavaScript e Typescript | React | Node!"
            })
        }
    }
} satisfies Dictionary

export default homeContent