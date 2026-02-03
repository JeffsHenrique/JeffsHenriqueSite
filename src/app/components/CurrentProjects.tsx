import Image from "next/image"
import { FC, useCallback, useEffect, useState } from "react" 
import { CurrentProject } from "../types/CurrentProject"
import { currentProjectsData } from "../utils/CurrentProjectData"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from "swiper/modules"
import { PhotoDialog } from "@/app/components/PhotoDialog"


interface CurrentProjectsProps {}

const CurrentProjects: FC<CurrentProjectsProps> = ({}) => {
    const [currentProjects, setCurrentProjects] = useState<CurrentProject[]>([])
    const [selectedProjectImg, setSelectedProjectImg] = useState<string | null>('')

    const currentLang = localStorage.getItem('LangContextKey')

    const getCurrentProjects = useCallback(async () => {
        try {
            const data = await currentProjectsData.getCurrentProjects()
            setCurrentProjects(data)
        } catch (error) {
            console.error(error)
        }
    }, [])

    const handleSelectedProjectImgOpen = (image: string) => {
        setSelectedProjectImg(image)
    }

    const handleSelectedProjectImgClosed = () => {
        setSelectedProjectImg(null)
    }

    useEffect(() => {
        getCurrentProjects()
    }, [getCurrentProjects])

    return (
        <div className="w-[80vw] max-h-[85vh] overflow-auto p-2 m-2 flex flex-col gap-2 scroll-smooth border-2 border-slate-700 dark:border-slate-300 rounded-md shadow-lg text-sky-900 dark:text-sky-200">
            <h1 className="my-4 text-5xl max-laptop:text-3xl text-center">
                {currentLang === 'us-en' ? `What I'm up to lately?` : 'O que estou fazendo atualmente?'}
            </h1>
            <hr className="border border-slate-700 dark:border-slate-300" />
                {currentProjects.map((project) => {
                    return (
                        <>
                            <div className="my-2 flex flex-row justify-between max-laptop:flex-col max-laptop:gap-2 max-laptop:items-center rounded-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
                                <div className="flex flex-col items-center text-center mx-2 gap-2 w-[24vw] max-laptop:w-full">
                                    <p className="font-bold text-xl">{project.name}</p>
                                    <Swiper
                                        modules={[Pagination]}
                                        spaceBetween={1}
                                        slidesPerView={1}
                                        pagination={{ clickable: true }}
                                        className="w-[24vw] max-laptop:w-full"
                                    >
                                        {project.img.map((img, index) => (
                                            <SwiperSlide key={index}>
                                                <button onClick={() => handleSelectedProjectImgOpen(img)}>
                                                    <Image
                                                        width={448}
                                                        height={448}
                                                        src={`${img}`}
                                                        alt={'Current Project Images'}
                                                        referrerPolicy="no-referrer"
                                                        className="p-2"
                                                        loading="lazy"
                                                    />
                                                </button>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                                <div className="flex flex-col text-center mx-2 w-[34vw] max-laptop:w-full">
                                    <p className="font-bold">{project.desc}</p>
                                </div>
                                <div className="flex flex-col text-center mx-2 gap-2 w-[10vw] max-laptop:w-full max-laptop:py-2">
                                    <p>{currentLang === 'us-en' ? `Started in:` : 'Início em:'} <span className="font-bold">{project.deadline.start}</span></p>
                                    {project.deadline.end ? (
                                        <p>{currentLang === 'us-en' ? `Delivered in:` : 'Concluído em:'} <span className="font-bold">{project.deadline.end}</span></p>
                                    ) : (
                                        <>
                                            <p>{currentLang === 'us-en' ? `In progress...` : 'Em progresso...'}</p>
                                            <p>{currentLang === 'us-en' ? `Deadline:` : 'Previsto para:'} <span className="font-bold">{project.deadline.handIn}</span></p>
                                        </>
                                    )}
                                </div>
                            </div>
                        </>
                    )
                })}

                {selectedProjectImg && (
                    <PhotoDialog
                        open={Boolean(selectedProjectImg)}
                        onClose={handleSelectedProjectImgClosed}
                        source={selectedProjectImg}
                    />
                )}
        </div>
    )
}

export default CurrentProjects