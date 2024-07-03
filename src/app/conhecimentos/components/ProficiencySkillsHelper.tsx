"use client"

import { Dialog, DialogContent, DialogTitle, Tooltip } from "@mui/material"
import { useState } from "react"

export interface HelperProps{
    open: boolean
    onClose: () => void
}

export const ProficiencySkillsHelper = (props: HelperProps) => {
    const { open, onClose } = props
    const [shouldSuperficialShow, setShouldSuperficialShow] = useState<boolean>(false)
    const [shouldBasicShow, setShouldBasicShow] = useState<boolean>(false)
    const [shouldBeginnerShow, setShouldBeginnerShow] = useState<boolean>(false)
    const [shouldIntermediateShow, setShouldIntermediateShow] = useState<boolean>(false)
    const [shouldAdvancedShow, setShouldAdvancedShow] = useState<boolean>(false)
    const [shouldSpecialistShow, setShouldSpecialistShow] = useState<boolean>(false)
    const [shouldMasterShow, setShouldMasterShow] = useState<boolean>(false)

    const handleClose = () => {
        onClose()
    }

    return (
        <Dialog open={open} onClose={handleClose} maxWidth='lg'>
            <div className="border-2 rounded-md border-slate-700 dark:border-slate-300 bg-sky-100 dark:bg-slate-900">
                <DialogTitle className="text-sky-900 dark:text-sky-200 my-4 flex justify-center">
                    <p>Escala de Proficiência de Skills</p>
                </DialogTitle>

                <DialogContent dividers>
                    <div className="text-sky-900 dark:text-sky-200 my-4 flex flex-col gap-4">
                        <p>Aqui encontram-se os critérios nos quais foram baseadas as minhas avaliações interpessoais para as linguagens e tecnologias:</p>

                        <div className="px-4 bg-sky-200 dark:bg-slate-800 border border-slate-700 dark:border-slate-300 rounded-md">
                            <ul className="m-4 h-96 overflow-auto flex flex-col gap-4">

                                <li>
                                    <Tooltip
                                        title="Clique para ver a descrição"
                                        arrow
                                        disableInteractive
                                        placement="right"
                                        enterDelay={1000}
                                    >
                                        <button onClick={() => setShouldSuperficialShow(!shouldSuperficialShow)}>
                                            <p className="ml-4 text-xl font-bold hover:text-purple-700 hover:dark:text-purple-400 duration-300">0% a 10% - Conhecimento Superficial</p>
                                        </button>
                                    </Tooltip>

                                    {shouldSuperficialShow && (
                                        <ul className="ml-16 my-2 flex flex-col gap-4 list-disc">
                                            <li>Apenas vi algum código ou ouvi falar;</li>
                                            <li>Reconheço a sintaxe ou conceitos básicos, mas não consigo aplicar sozinho.</li>
                                        </ul>
                                    )}
                                </li>

                                <li>
                                    <Tooltip
                                        title="Clique para ver a descrição"
                                        arrow
                                        disableInteractive
                                        placement="right"
                                    >
                                        <button onClick={() => setShouldBasicShow(!shouldBasicShow)}>
                                            <p className="ml-4 text-xl font-bold hover:text-purple-700 hover:dark:text-purple-400 duration-300">10% a 20% - Noções Básicas</p>
                                        </button>
                                    </Tooltip>

                                    {shouldBasicShow && (
                                        <ul className="ml-16 flex flex-col gap-4 list-disc">
                                            <li>Sei o básico;</li>
                                            <li>Consigo entender exemplos simples e modificar pequenos trechos de código;</li>
                                            <li>Preciso de muita orientação ou consultar referências frequentemente.</li>
                                        </ul>
                                    )}
                                </li>

                                <li>
                                    <Tooltip
                                        title="Clique para ver a descrição"
                                        arrow
                                        disableInteractive
                                        placement="right"
                                    >
                                        <button onClick={() => setShouldBeginnerShow(!shouldBeginnerShow)}>
                                            <p className="ml-4 text-xl font-bold hover:text-purple-700 hover:dark:text-purple-400 duration-300">20% a 40% - Iniciante</p>
                                        </button>
                                    </Tooltip>

                                    {shouldBeginnerShow && (
                                        <ul className="ml-16 my-2 flex flex-col gap-4 list-disc">
                                            <li>Posso escrever código simples com orientação;</li>
                                            <li>Tenho conhecimento das funcionalidades básicas e consigo fazer tarefas simples;</li>
                                            <li>Frequentemente preciso de ajuda ou de pesquisar soluções.</li>
                                        </ul>
                                    )}
                                </li>

                                <li>
                                    <Tooltip
                                        title="Clique para ver a descrição"
                                        arrow
                                        disableInteractive
                                        placement="right"
                                    >
                                        <button onClick={() => setShouldIntermediateShow(!shouldIntermediateShow)}>
                                            <p className="ml-4 text-xl font-bold hover:text-purple-700 hover:dark:text-purple-400 duration-300">40% a 60% - Intermediário</p>
                                        </button>
                                    </Tooltip>

                                    {shouldIntermediateShow && (
                                        <ul className="ml-16 my-2 flex flex-col gap-4 list-disc">
                                            <li>Consigo trabalhar de forma independente em projetos de complexidade moderada;</li>
                                            <li>Tenho um bom entendimento das funcionalidades e práticas comuns;</li>
                                            <li>Posso resolver problemas comuns sem muita dificuldade e ajudar iniciantes.</li>
                                        </ul>
                                    )}
                                </li>

                                <li>
                                    <Tooltip
                                        title="Clique para ver a descrição"
                                        arrow
                                        disableInteractive
                                        placement="right"
                                    >
                                        <button onClick={() => setShouldAdvancedShow(!shouldAdvancedShow)}>
                                            <p className="ml-4 text-xl font-bold hover:text-purple-700 hover:dark:text-purple-400 duration-300">60% a 80% - Avançado</p>
                                        </button>
                                    </Tooltip>

                                    {shouldAdvancedShow && (
                                        <ul className="ml-16 my-2 flex flex-col gap-4 list-disc">
                                            <li>Tenho proficiência em usar a tecnologia para tarefas complexas;</li>
                                            <li>Sou capaz de otimizar e depurar código de maneira eficiente;</li>
                                            <li>Conheço bem as melhores práticas e padrões da indústria.</li>
                                        </ul>
                                    )}
                                </li>

                                <li>
                                    <Tooltip
                                        title="Clique para ver a descrição"
                                        arrow
                                        disableInteractive
                                        placement="right"
                                    >
                                        <button onClick={() => setShouldSpecialistShow(!shouldSpecialistShow)}>
                                            <p className="ml-4 text-xl font-bold hover:text-purple-700 hover:dark:text-purple-400 duration-300">80% a 90% - Especialista</p>
                                        </button>
                                    </Tooltip>

                                    {shouldSpecialistShow && (
                                        <ul className="ml-16 my-2 flex flex-col gap-4 list-disc">
                                            <li>Profundo conhecimento e experiência na tecnologia;</li>
                                            <li>Consigo lidar com problemas muito complexos e arquitetar soluções robustas;</li>
                                            <li>Sou referência no assunto e posso ensinar outros.</li>
                                        </ul>
                                    )}
                                </li>

                                <li>
                                    <Tooltip
                                        title="Clique para ver a descrição"
                                        arrow
                                        disableInteractive
                                        placement="right"
                                    >
                                        <button onClick={() => setShouldMasterShow(!shouldMasterShow)}>
                                            <p className="ml-4 text-xl font-bold hover:text-purple-700 hover:dark:text-purple-400 duration-300">90% a 100% - Mestre</p>
                                        </button>
                                    </Tooltip>

                                    {shouldMasterShow && (
                                        <ul className="ml-16 my-2 flex flex-col gap-4 list-disc">
                                            <li>Domínio completo da tecnologia;</li>
                                            <li>Capaz de criar soluções inovadoras e personalizadas;</li>
                                            <li>Contribuo para a comunidade, desenvolvo ferramentas e frameworks;</li>
                                            <li>Tenho um entendimento tão profundo que sou considerado uma autoridade no assunto.</li>
                                        </ul>
                                    )}
                                </li>
                            </ul>
                        </div>
                    </div>
                </DialogContent>
            </div>
        </Dialog>
    )
}