import { type Dictionary, t } from "intlayer"

const footerContent = {
    key: "footer",
    content: {
        footer: t({
            en: "©️ All rights reserved to",
            "pt-BR": "©️ Todos os direitos reservados para",
        }),
    }
} satisfies Dictionary

export default footerContent