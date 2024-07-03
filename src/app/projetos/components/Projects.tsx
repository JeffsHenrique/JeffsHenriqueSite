import { useCallback, useEffect, useState } from "react"
import { Project } from "../types/Project"
import { projectsData } from "../utils/ProjectsData"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from "swiper/modules"
import { PhotoDialog } from "@/app/components/PhotoDialog"
import { Section } from "@/app/components/Section"

export const Projects = () => {
    const [projects, setProjects] = useState<Project[]>([])
    const [selectedProjectImg, setSelectedProjectImg] = useState<string | null>('')

    const getProjects = useCallback(async () => {
        try {
            const data = await projectsData.getProjects()
            setProjects(data)
        } catch (error) {
            console.error(error)
        }
    }, [])

    const filteredProjectsByLevel = projects
        .sort((a, b) => b.projectLevel - a.projectLevel)

    const handleSelectedProjectImgOpen = (image: string) => {
        setSelectedProjectImg(image)
    }

    const handleSelectedProjectImgClosed = () => {
        setSelectedProjectImg(null)
    }

    useEffect(() => {
        getProjects()
    }, [getProjects])

    return (
        <div className="m-2 p-2 grid grid-cols-2 gap-12 text-sky-900 dark:text-sky-200">
            {filteredProjectsByLevel.map((project) => {
                return (
                    <Section>
                        <div className="min-h-full flex flex-col items-center justify-between border-2 border-slate-700 dark:border-slate-300 shadow-lg rounded-md">
                            <p className="my-2 text-3xl font-bold underline">{project.title}</p>
                            <p className="my-2 flex flex-col items-center overflow-auto px-2 text-center text-purple-700 dark:text-purple-500">Descrição do projeto:
                                <span className="font-bold text-sky-900 dark:text-sky-200">{project.description.projectDetails}</span>
                            </p>
                            <p className="mb-2 px-2 text-center text-purple-700 dark:text-purple-500">Linguagens usadas: <span className="font-bold text-sky-900 dark:text-sky-200">{project.description.techsUsed}</span></p>
                            <Swiper
                                modules={[Pagination]}
                                spaceBetween={1}
                                slidesPerView={1}
                                pagination={{ clickable: true }}
                                className="w-9/12"
                            >
                                {project.images.map((img, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="my-2 flex justify-center items-center overflow-hidden border border-slate-700 dark:border-slate-300 shadow-lg rounded-md">
                                            <div className="m-2 p-2">
                                                <button onClick={() => handleSelectedProjectImgOpen(img)}>
                                                    <img
                                                        className="size-96 object-cover rounded-md cursor-pointer"
                                                        src={img}
                                                        alt={project.imageAlt}
                                                        loading="lazy"
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <p className="mb-2 px-2 text-center text-green-800 dark:text-green-500">Arraste para o lado e veja outras imagens do projeto.</p>
                            <p className="mb-2 px-2 text-center text-green-800 dark:text-green-500">Clique para ampliá-las.</p>
                            <div className="flex flex-col gap-4">
                                {project.externalLinks?.projectLink && (
                                    <a className="my-2 px-2 text-xl text-center underline text-sky-900 dark:text-sky-200" href={project.externalLinks.projectLink} target="_blank">Link do projeto</a>
                                )}

                                {project.externalLinks?.ref && (
                                    <p className="my-2 px-2 text-center text-purple-700 dark:text-purple-500">Referências: <a className="font-bold underline text-sky-900 dark:text-sky-200" href={project.externalLinks.ref.link} target="_blank">{project.externalLinks.ref.name}</a></p>
                                )}
                            </div>
                        </div>
                    </Section>
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