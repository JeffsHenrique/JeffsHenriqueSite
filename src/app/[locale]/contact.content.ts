import { type Dictionary, t } from "intlayer"

const contactContent = {
    key: "contact",
    content: {
        toasts: {
            sent: t({
                en: "The e-mail has been sent successfully!",
                "pt-BR": "O e-mail foi enviado com sucesso!",
            }),
            error: t({
                en: "Oops, something went wrong... :(",
                "pt-BR": "Ops, deu algum erro :(",
            }),
            warn: t({
                en: "Fill in both fields, please!",
                "pt-BR": "Preencha os dois campos, por favor!",
            })
        },
        dialog: {
            title: t({
                en: "You can find me on the social medias:",
                "pt-BR": "Você pode me encontrar nas redes:",
            }),
            text_1: t({
                en: "Or you can send me an e-mail:",
                "pt-BR": "Ou pode me mandar um e-mail:",
            }),
            type_email: t({
                en: "Type your e-mail:",
                "pt-BR": "Digite o seu e-mail:",
            }),
            write_message: t({
                en: "Write your message:",
                "pt-BR": "Escreva a sua mensagem:",
            }),
            send: t({
                en: "Send",
                "pt-BR": "Enviar",
            }),
        }
    }
} satisfies Dictionary

export default contactContent