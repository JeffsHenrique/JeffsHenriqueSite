"use client"

import { Dialog, DialogContent, DialogTitle, Tooltip } from "@mui/material"
import { FC, useState } from "react" 

interface CertificatesDialogProps {
    open: boolean
    onClose: () => void
}

const CertificatesDialog: FC<CertificatesDialogProps> = ({ open, onClose }) => {
    const [shouldFreeCoursesCertificatesShow, setShouldFreeCoursesCertificatesShow] = useState<boolean>(true)
    const [shouldSpecializationCoursesCertificatesShow, setShouldSpecializationCoursesCertificatesShow] = useState<boolean>(false)
    const [shouldAcademicCoursesCertificatesShow, setShouldAcademicCoursesCertificatesShow] = useState<boolean>(false)

    const currentLang = localStorage.getItem('LangContextKey')

    const handleClose = () => {
        onClose()
    }

    return (
        <Dialog open={open} onClose={handleClose} maxWidth='lg'>
            <div className="border-2 rounded-md border-slate-700 dark:border-slate-300 bg-sky-100 dark:bg-slate-900">
                <DialogTitle className="text-sky-900 dark:text-sky-200 flex justify-center">
                    <p>{currentLang === 'us-en' ? `My Certificates` : 'Meus Certificados'}</p>
                </DialogTitle>

                <DialogContent dividers>
                    <div className="text-sky-900 dark:text-sky-200 my-4 flex justify-center">

                        <div className="px-4 py-2 bg-sky-200 dark:bg-slate-800 border border-slate-700 dark:border-slate-300 rounded-md">
                            <p className="font-bold text-xl">{currentLang === 'us-en' ? `Here you can find all my certificates:` : 'Aqui, você pode encontrar os meus certificados:'}</p>

                            <ul className="m-4 h-96 overflow-auto flex flex-col gap-4">
                                <li>
                                    <Tooltip
                                        title={`${currentLang === 'us-en' ? `Click here to show the certificates` : 'Clique para ver os certificados'}`}
                                        arrow
                                        disableInteractive
                                        placement="right"
                                        enterDelay={1000}
                                    >
                                        <button onClick={() => setShouldFreeCoursesCertificatesShow(!shouldFreeCoursesCertificatesShow)}>
                                            <p className="ml-4 font-bold hover:text-purple-700 hover:dark:text-purple-400 duration-300">{currentLang === 'us-en' ? `Free Courses` : 'Cursos Livres'}</p>
                                        </button>
                                    </Tooltip>

                                    {shouldFreeCoursesCertificatesShow && (
                                        <ul className="ml-16 my-2 flex flex-col gap-4 list-disc">
                                            {/* ROCKETSEAT */}
                                            <li>
                                                <a className="text-sky-700 dark:text-sky-500 underline" href="https://app.rocketseat.com.br/certificates/03269e8d-8f32-49c8-b358-608668544a38" target="_blank">
                                                    NLW Pocket: Mobile - React Native (Rocketseat)
                                                </a>
                                            </li>

                                            <li>
                                                <a className="text-sky-700 dark:text-sky-500 underline" href="https://app.rocketseat.com.br/certificates/4192bf0f-df1c-48c4-80de-2d9c234df2df" target="_blank">
                                                    NLW Expert trilha de React (Rocketseat)
                                                </a>
                                            </li>

                                            {/* UDEMY */}
                                            <li>
                                                <a className="text-sky-700 dark:text-sky-500 underline" href="https://www.udemy.com/certificate/UC-1e117c5b-5d28-4625-9823-8d249e2cfbb8/" target="_blank">
                                                    React JS: Aprenda ReactJS do zero com projetos práticos (Udemy)
                                                </a>
                                            </li>

                                            <li>
                                                <a className="text-sky-700 dark:text-sky-500 underline" href="https://www.udemy.com/certificate/UC-14d0fd21-3180-4a40-9e6f-2ca0f1b4defd/" target="_blank">
                                                    Docker & Kubernetes: The Practical Guide [2025 Edition]
                                                </a>
                                            </li>

                                            {/* B7WEB */}
                                            <li>
                                                <a className="text-sky-700 dark:text-sky-500 underline" href="https://alunos.b7web.com.br/media/certificates/certificado_655084.jpg" target="_blank">
                                                    Git/GitHub (B7Web)
                                                </a>
                                            </li>

                                            <li>
                                                <a className="text-sky-700 dark:text-sky-500 underline" href="https://alunos.b7web.com.br/media/certificates/certificado_1283983.jpg" target="_blank">
                                                    Typescript (B7Web)
                                                </a>
                                            </li>

                                            <li>
                                                <a className="text-sky-700 dark:text-sky-500 underline" href="https://alunos.b7web.com.br/media/certificates/certificado_3323489.jpg" target="_blank">
                                                    Bancos de Dados (B7Web)
                                                </a>
                                            </li>

                                            {/* GOOGLE - CLOUDSKILLSBOOST */}
                                            <li>
                                                <a className="text-sky-700 dark:text-sky-500 underline" href="https://www.cloudskillsboost.google/public_profiles/d0f4633d-e83c-4705-b932-bf445ef4df34/badges/14509369?locale=en&utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share" target="_blank">
                                                    Responsible AI: Applying AI Principles with Google Cloud (Google Cloud)
                                                </a>
                                            </li>

                                            <li>
                                                <a className="text-sky-700 dark:text-sky-500 underline" href="https://www.credly.com/badges/b2c6da2e-c8a3-4154-b195-21be8f4c4dc4/linked_in_profile" target="_blank">
                                                    Prompt Design in Vertex AI Skill Badge (Google Cloud)
                                                </a>
                                            </li>

                                            <li>
                                                <a className="text-sky-700 dark:text-sky-500 underline" href="https://www.cloudskillsboost.google/public_profiles/d0f4633d-e83c-4705-b932-bf445ef4df34/badges/14388249?locale=en&utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share" target="_blank">
                                                    Introduction to Responsible AI (Google Cloud)
                                                </a>
                                            </li>

                                            <li>
                                                <a className="text-sky-700 dark:text-sky-500 underline" href="https://www.cloudskillsboost.google/public_profiles/d0f4633d-e83c-4705-b932-bf445ef4df34/badges/14387089?locale=en&utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share" target="_blank">
                                                    Introduction to Large Language Models (Google Cloud)
                                                </a>
                                            </li>

                                            <li>
                                                <a className="text-sky-700 dark:text-sky-500 underline" href="https://www.cloudskillsboost.google/public_profiles/d0f4633d-e83c-4705-b932-bf445ef4df34/badges/14360197?locale=en&utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share" target="_blank">
                                                    Introduction to Generative AI (Google Cloud)
                                                </a>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                {/* ASSIM QUE TIVER DADOS PRA ADICIONAR, EU TIRO O COMENTÁRIO :)
                                <li>
                                    <Tooltip
                                        title={`${currentLang === 'us-en' ? `Click here to show the certificates` : 'Clique para ver os certificados'}`}
                                        arrow
                                        disableInteractive
                                        placement="right"
                                        enterDelay={1000}
                                    >
                                        <button onClick={() => setShouldSpecializationCoursesCertificatesShow(!shouldSpecializationCoursesCertificatesShow)}>
                                            <p className="ml-4 font-bold hover:text-purple-700 hover:dark:text-purple-400 duration-300">{currentLang === 'us-en' ? `Specialization Courses` : 'Cursos Especializantes'}</p>
                                        </button>
                                    </Tooltip>

                                    {shouldSpecializationCoursesCertificatesShow && (
                                        <ul className="ml-16 my-2 flex flex-col gap-4 list-disc">
                                            <li>{currentLang === 'us-en' ? `` : ''}</li>
                                        </ul>
                                    )}
                                </li>

                                <li>
                                    <Tooltip
                                        title={`${currentLang === 'us-en' ? `Click here to show the certificates` : 'Clique para ver os certificados'}`}
                                        arrow
                                        disableInteractive
                                        placement="right"
                                        enterDelay={1000}
                                    >
                                        <button onClick={() => setShouldAcademicCoursesCertificatesShow(!shouldAcademicCoursesCertificatesShow)}>
                                            <p className="ml-4 font-bold hover:text-purple-700 hover:dark:text-purple-400 duration-300">{currentLang === 'us-en' ? `Academic Courses` : 'Cursos Acadêmicos'}</p>
                                        </button>
                                    </Tooltip>

                                    {shouldAcademicCoursesCertificatesShow && (
                                        <ul className="ml-16 my-2 flex flex-col gap-4 list-disc">
                                            <li>{currentLang === 'us-en' ? `` : ''}</li>
                                        </ul>
                                    )}
                                </li> */}
                            </ul>
                        </div>
                    </div>


                </DialogContent>
            </div>
        </Dialog>
    )
}

export default CertificatesDialog