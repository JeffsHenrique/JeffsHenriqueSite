import { type Dictionary, t } from "intlayer";

const headerContent = {
    key: "header",
    content: {
        projects: t({
            en: "Projects",
            "pt-BR": "Projetos"
        }),
        skills: t({
            en: "Skills",
            "pt-BR": "Conhecimentos"
        }),
        experiences: t({
            en: "Experiences",
            "pt-BR": "Experiências"
        }),
        contact: t({
            en: "Contact",
            "pt-BR": "Contato"
        })
    }
} satisfies Dictionary

export default headerContent