"use client"

import { Dialog, DialogContent, DialogTitle, Tooltip } from "@mui/material"
import { useState } from "react"

export interface HelperProps {
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

    const currentLang = localStorage.getItem('LangContextKey')

    const handleClose = () => {
        onClose()
    }

    return (
        <Dialog open={open} onClose={handleClose} maxWidth='lg'>
            <div className="border-2 rounded-md border-slate-700 dark:border-slate-300 bg-sky-100 dark:bg-slate-900">
                <DialogTitle className="text-sky-900 dark:text-sky-200 my-4 flex justify-center">
                    <p>{currentLang === 'us-en' ? `Skills Proficiency Scale` : 'Escala de Proficiência de Skills'}</p>
                </DialogTitle>

                <DialogContent dividers>
                    <div className="text-sky-900 dark:text-sky-200 my-4 flex flex-col gap-4">
                        <p>{currentLang === 'us-en' ? `Here, you can find the criteria on which my self-assessment in various technologies were based:` : 'Aqui encontram-se os critérios nos quais foram baseadas as minhas avaliações interpessoais para as linguagens e tecnologias:'}</p>

                        <div className="px-4 bg-sky-200 dark:bg-slate-800 border border-slate-700 dark:border-slate-300 rounded-md">
                            <ul className="m-4 h-96 overflow-auto flex flex-col gap-4">

                                <li>
                                    <Tooltip
                                        title={`${currentLang === 'us-en' ? `Click here to show the description` : 'Clique para ver a descrição'}`}
                                        arrow
                                        disableInteractive
                                        placement="right"
                                        enterDelay={1000}
                                    >
                                        <button onClick={() => setShouldSuperficialShow(!shouldSuperficialShow)}>
                                            <p className="ml-4 text-xl font-bold hover:text-purple-700 hover:dark:text-purple-400 duration-300">{currentLang === 'us-en' ? `0% to 10% - Surface Understanding` : '0% a 10% - Conhecimento Superficial'}</p>
                                        </button>
                                    </Tooltip>

                                    {shouldSuperficialShow && (
                                        <ul className="ml-16 my-2 flex flex-col gap-4 list-disc">
                                            <li>{currentLang === 'us-en' ? `I've only seen some codes or barely heard of it; ` : 'Apenas vi algum código ou ouvi falar;'}</li>
                                            <li>{currentLang === 'us-en' ? `I recognize the syntax or its basic concepts, but I can't manipulate it by myself.` : 'Reconheço a sintaxe ou conceitos básicos, mas não consigo aplicar sozinho.'}</li>
                                        </ul>
                                    )}
                                </li>

                                <li>
                                    <Tooltip
                                        title={`${currentLang === 'us-en' ? `Click here to show the description` : 'Clique para ver a descrição'}`}
                                        arrow
                                        disableInteractive
                                        placement="right"
                                    >
                                        <button onClick={() => setShouldBasicShow(!shouldBasicShow)}>
                                            <p className="ml-4 text-xl font-bold hover:text-purple-700 hover:dark:text-purple-400 duration-300">{currentLang === 'us-en' ? `10% to 20% - Basics` : '10% a 20% - Noções Básicas'}</p>
                                        </button>
                                    </Tooltip>

                                    {shouldBasicShow && (
                                        <ul className="ml-16 my-2 flex flex-col gap-4 list-disc">
                                            <li>{currentLang === 'us-en' ? `I know the basic;` : 'Sei o básico;'}</li>
                                            <li>{currentLang === 'us-en' ? `I can understand simple examples and modify small pieces of code;` : 'Consigo entender exemplos simples e modificar pequenos trechos de código;'}</li>
                                            <li>{currentLang === 'us-en' ? `I need much guidance or consult references frequently.` : 'Preciso de muita orientação ou consultar referências frequentemente.'}</li>
                                        </ul>
                                    )}
                                </li>

                                <li>
                                    <Tooltip
                                        title={`${currentLang === 'us-en' ? `Click here to show the description` : 'Clique para ver a descrição'}`}
                                        arrow
                                        disableInteractive
                                        placement="right"
                                    >
                                        <button onClick={() => setShouldBeginnerShow(!shouldBeginnerShow)}>
                                            <p className="ml-4 text-xl font-bold hover:text-purple-700 hover:dark:text-purple-400 duration-300">{currentLang === 'us-en' ? `20% to 40% - Beginner` : '20% a 40% - Iniciante'}</p>
                                        </button>
                                    </Tooltip>

                                    {shouldBeginnerShow && (
                                        <ul className="ml-16 my-2 flex flex-col gap-4 list-disc">
                                            <li>{currentLang === 'us-en' ? `I can write simple codes with some guidance;` : 'Posso escrever código simples com orientação;'}</li>
                                            <li>{currentLang === 'us-en' ? `I'm aware of the basic functionalities and I can do simple tasks;` : 'Tenho conhecimento das funcionalidades básicas e consigo fazer tarefas simples;'}</li>
                                            <li>{currentLang === 'us-en' ? `I frequently need help or search it for solutions.` : 'Frequentemente preciso de ajuda ou de pesquisar soluções.'}</li>
                                        </ul>
                                    )}
                                </li>

                                <li>
                                    <Tooltip
                                        title={`${currentLang === 'us-en' ? `Click here to show the description` : 'Clique para ver a descrição'}`}
                                        arrow
                                        disableInteractive
                                        placement="right"
                                    >
                                        <button onClick={() => setShouldIntermediateShow(!shouldIntermediateShow)}>
                                            <p className="ml-4 text-xl font-bold hover:text-purple-700 hover:dark:text-purple-400 duration-300">{currentLang === 'us-en' ? `40% to 60% - Intermediate` : '40% a 60% - Intermediário'}</p>
                                        </button>
                                    </Tooltip>

                                    {shouldIntermediateShow && (
                                        <ul className="ml-16 my-2 flex flex-col gap-4 list-disc">
                                            <li>{currentLang === 'us-en' ? `I can work independently on projects with a moderate level of complexity` : 'Consigo trabalhar de forma independente em projetos de complexidade moderada;'}</li>
                                            <li>{currentLang === 'us-en' ? `I have a good understanding of its functionalities and good practices;` : 'Tenho um bom entendimento das funcionalidades e práticas comuns;'}</li>
                                            <li>{currentLang === 'us-en' ? `I can solve common problems without much trouble, and I can help beginners.` : 'Posso resolver problemas comuns sem muita dificuldade e ajudar iniciantes.'}</li>
                                        </ul>
                                    )}
                                </li>

                                <li>
                                    <Tooltip
                                        title={`${currentLang === 'us-en' ? `Click here to show the description` : 'Clique para ver a descrição'}`}
                                        arrow
                                        disableInteractive
                                        placement="right"
                                    >
                                        <button onClick={() => setShouldAdvancedShow(!shouldAdvancedShow)}>
                                            <p className="ml-4 text-xl font-bold hover:text-purple-700 hover:dark:text-purple-400 duration-300">{currentLang === 'us-en' ? `60% to 80% - Advanced` : '60% a 80% - Avançado'}</p>
                                        </button>
                                    </Tooltip>

                                    {shouldAdvancedShow && (
                                        <ul className="ml-16 my-2 flex flex-col gap-4 list-disc">
                                            <li>{currentLang === 'us-en' ? `I have expertise in using the technology for complex tasks;` : 'Tenho proficiência em usar a tecnologia para tarefas complexas;'}</li>
                                            <li>{currentLang === 'us-en' ? `I'm able to optimize and debug the code efficiently;` : 'Sou capaz de otimizar e depurar código de maneira eficiente;'}</li>
                                            <li>{currentLang === 'us-en' ? `I'm well informed of the best practices and patterns of the industry.` : 'Conheço bem as melhores práticas e padrões da indústria.'}</li>
                                        </ul>
                                    )}
                                </li>

                                <li>
                                    <Tooltip
                                        title={`${currentLang === 'us-en' ? `Click here to show the description` : 'Clique para ver a descrição'}`}
                                        arrow
                                        disableInteractive
                                        placement="right"
                                    >
                                        <button onClick={() => setShouldSpecialistShow(!shouldSpecialistShow)}>
                                            <p className="ml-4 text-xl font-bold hover:text-purple-700 hover:dark:text-purple-400 duration-300">{currentLang === 'us-en' ? `80% to 90% - Specialist` : '80% a 90% - Especialista'}</p>
                                        </button>
                                    </Tooltip>

                                    {shouldSpecialistShow && (
                                        <ul className="ml-16 my-2 flex flex-col gap-4 list-disc">
                                            <li>{currentLang === 'us-en' ? `A deep knowledge and experience in the technology;` : 'Profundo conhecimento e experiência na tecnologia;'}</li>
                                            <li>{currentLang === 'us-en' ? `I can deal with complex problems and I'm able to find strong solutions;` : 'Consigo lidar com problemas muito complexos e arquitetar soluções robustas;'}</li>
                                            <li>{currentLang === 'us-en' ? `I'm an expert in the subject and I can teach others.` : 'Sou referência no assunto e posso ensinar outros.'}</li>
                                        </ul>
                                    )}
                                </li>

                                <li>
                                    <Tooltip
                                        title={`${currentLang === 'us-en' ? `Click here to show the description` : 'Clique para ver a descrição'}`}
                                        arrow
                                        disableInteractive
                                        placement="right"
                                    >
                                        <button onClick={() => setShouldMasterShow(!shouldMasterShow)}>
                                            <p className="ml-4 text-xl font-bold hover:text-purple-700 hover:dark:text-purple-400 duration-300">{currentLang === 'us-en' ? `90% to 100% - Master` : '90% a 100% - Mestre'}</p>
                                        </button>
                                    </Tooltip>

                                    {shouldMasterShow && (
                                        <ul className="ml-16 my-2 flex flex-col gap-4 list-disc">
                                            <li>{currentLang === 'us-en' ? `Complete understanding of the skill;` : 'Domínio completo da tecnologia;'}</li>
                                            <li>{currentLang === 'us-en' ? `I'm able to create innovative and customizable solutions;` : 'Capaz de criar soluções inovadoras e personalizadas;'}</li>
                                            <li>{currentLang === 'us-en' ? `I contribute to the community and develop tools and frameworks;` : 'Contribuo para a comunidade e desenvolvo ferramentas e frameworks;'}</li>
                                            <li>{currentLang === 'us-en' ? `I have such a thorough understanding that I'm consider an authority in the subject.` : 'Tenho um entendimento tão profundo que sou considerado uma autoridade no assunto.'}</li>
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