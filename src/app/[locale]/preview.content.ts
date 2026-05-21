import { type Dictionary, t } from "intlayer"

const previewContent = {
    key: "preview",
    content: {
        projects_preview: {
            title: t({
                en: `My Projects`,
                "pt-BR": "Meus Projetos",
            }),
            see_more: t({
                en: `See more projects`,
                "pt-BR": "Ver Mais Projetos",
            })
        },
        skills_preview: {
            title: t({
                en: `My Skills`,
                "pt-BR": "Meus Conhecimentos",
            }),
            see_more: t({
                en: `See more skills`,
                "pt-BR": "Ver Mais Conhecimentos",
            })
        },
        experiences_preview: {
            title: t({
                en: `Current Experiences`,
                "pt-BR": "Experiências Atuais",
            }),
            see_more: t({
                en: `See all my experiences`,
                "pt-BR": "Ver Toda Minha Experiência",
            })
        },
    }
} satisfies Dictionary

export default previewContent