import { type Dictionary, t } from "intlayer"

const homeContent = {
    key: "home",
    content: {
        title: {
            text_1: t({
                en: `Turning ideas into`,
                "pt-BR": "Transformo ideias em",
            }),
            text_2: t({
                en: `digital solutions`,
                "pt-BR": "soluções digitais",
            }),
            text_3: t({
                en: `for your business!`,
                "pt-BR": "perfeitas para o seu negócio!",
            }),
        },
        bio: t({
            en: `Web developer | IT`,
            "pt-BR": "Desenvolvedor de sistemas | TI",
        }),
        request_quote: t({
            en: `Request a quote`,
            "pt-BR": "Solicitar orçamento",
        }),
    }
} satisfies Dictionary

export default homeContent