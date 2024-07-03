"use client"

import { useCallback, useEffect, useState } from "react"
import { Experience } from "../types/Experience"
import { experiencesData } from "../utils/ExperiencesData"
import { useTheme } from "@/app/contexts/ThemeContext"

import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { PhotoDialog } from "../../components/PhotoDialog"
import { Button } from "@mui/material"
import { VerticalTimelineSection } from "@/app/components/Section"

export const TimelineContent = () => {
    const themeCtx = useTheme()

    const [experiences, setExperiences] = useState<Experience[]>([])
    const [selectedPic, setSelectedPic] = useState<string | null>('')
    const [filteredType, setFilteredType] = useState<string>('')

    const getExperiences = useCallback(async () => {
        try {
            const data = await experiencesData.getExperiences()
            setExperiences(data)
        } catch (error) {
            console.error(error)
        }
    }, [])

    const handleSelectedPictureOpen = (image: string) => {
        setSelectedPic(image)
    }

    const handleSelectedPictureClose = () => {
        setSelectedPic(null)
    }

    const parseDate = (dateStr: string) => {
        const [day, month, year] = dateStr.split('/').map(Number)

        return new Date(year, month - 1, day)
    }

    const calculatePeriod = (startDate: string, endDate: string) => {
        const start = parseDate(startDate).getTime()
        const end = parseDate(endDate).getTime()

        const diffInMs = end - start

        const diffInDays = diffInMs / (1000 * 60 * 60 * 24)

        let months = Math.floor(diffInDays / 30.44)
        let years = Math.floor(months / 12)
        months = months % 12

        return { years, months }
    }

    
    const filteredExperiences = experiences
        .sort((a, b) => {
            const dateA = parseDate(a.period.start)
            const dateB = parseDate(b.period.start)

            return dateB.getTime() - dateA.getTime()
        })
        .filter((type) => filteredType === '' ? type : (type.professionalType === filteredType))

    // STYLES
    const workContentStyle = themeCtx?.theme === 'dark' ? {background: '#185688', color: '#bae6fd'} : {background: '#7dd3fc', color: '#0c4a6e'}
    const studyContentStyle = themeCtx?.theme === 'dark' ? {background: '#8224f5', color: '#bae6fd'} : {background: '#bf8cfe', color: '#0c4a6e'}

    const workContentArrowStyle = themeCtx?.theme === 'dark' ? '#185688' : '#7dd3fc'
    const studyContentArrowStyle = themeCtx?.theme === 'dark' ? '#8224f5' : '#bf8cfe'

    const workIconStyle = themeCtx?.theme === 'dark' ? { background: '#0a263d', color: '#bae6fd' } : { background: '#62b5fa', color: '#0c4a6e' }
    const studyIconStyle = themeCtx?.theme === 'dark' ? { background: '#691dc4', color: '#bae6fd' } : { background: '#9d72d1', color: '#0c4a6e' }

    useEffect(() => {
        getExperiences()
    }, [getExperiences])

    return (
        <div className="m-2 p-2 flex flex-col gap-4">

            <div className="p-2 flex flex-row gap-4 justify-center items-center text-sky-900 dark:text-sky-200">
                <p>Filtrar por:</p>
                <Button variant={filteredType === 'study' ? 'contained' : 'outlined'} color="secondary" onClick={() => setFilteredType('study')}>Especialização</Button>
                <Button variant={filteredType === 'work' ? 'contained' : 'outlined'} color="primary" onClick={() => setFilteredType('work')}>Trabalho</Button>
                <Button variant={filteredType === '' ? 'contained' : 'outlined'} color="success" onClick={() => setFilteredType('')}>Todos</Button>
            </div>

            <VerticalTimeline lineColor={themeCtx?.theme === 'dark' ? '#185688' : '#7dd3fc'}>
                {filteredExperiences.map((experience) => {
                    const yearsPeriod = calculatePeriod(experience.period.start, experience.period.end).years
                    const monthsPeriod = calculatePeriod(experience.period.start, experience.period.end).months

                    return (
                        <div className="vertical-timeline-element transition-all hover:scale-105">
                            <VerticalTimelineSection>
                                <VerticalTimelineElement
                                    contentStyle={experience.professionalType === 'work' ? workContentStyle : studyContentStyle}
                                    contentArrowStyle={{ borderRight: `7px solid ${experience.professionalType === 'work' ? workContentArrowStyle : studyContentArrowStyle}` }}
                                    date={`${experience.period.start} - ${experience.period.end} • ${yearsPeriod === 0 ? '' : (yearsPeriod === 1 ? `${yearsPeriod} ano` : `${yearsPeriod} anos`)} ${monthsPeriod === 0 ? '' : (monthsPeriod === 1 ? `${monthsPeriod} mês` : `${monthsPeriod} meses`)} `}
                                    dateClassName="text-black dark:text-white"
                                    iconStyle={experience.professionalType === 'work' ? workIconStyle : studyIconStyle}
                                    icon={experience.professionalType === 'work' ? <WorkIcon /> : <SchoolIcon />}
                                    visible={true}
                                    style={{
                                        minHeight: '200px',
                                    }}
                                >
                                    <div className="flex flex-col justify-center items-center text-center">
                                        {experience.isMyCurrentExperience && (
                                            <p className="absolute top-0 px-2 bg-green-900 rounded-full shadow-lg text-sky-200">Atualmente</p>
                                        )}
                                        <p style={{fontSize: '24px'}}>{experience.positionName}</p>
                                        <p>{experience.companyName}</p>
                                        <p style={{fontSize: '12px'}}>{experience.mainRole}</p>
                                        {experience.mainTools && (
                                            <p style={{fontSize: '12px'}}>Principais Ferramentas: <span className="font-bold">{experience.mainTools}</span></p>
                                        )}
                                    </div>
                                    {experience.photos && (
                                        <div className="mt-4 flex flex-row gap-4">
                                            {experience.photos?.map((pic, index) => {
                                                return (
                                                    <button onClick={() => handleSelectedPictureOpen(pic)}>
                                                        <div key={index}>
                                                            <img className="w-10 hover:animate-zoomIn aspect-square rounded-lg shadow-lg" src={pic}/>
                                                        </div>
                                                    </button>
                                                )
                                            })}
                                        </div>
                                    )}
                                </VerticalTimelineElement>
                            </VerticalTimelineSection>
                        </div>
                    )
                })}

                {selectedPic && (
                    <PhotoDialog
                        open={Boolean(selectedPic)}
                        onClose={handleSelectedPictureClose}
                        source={selectedPic}
                    />
                )}

            </VerticalTimeline>
        </div>
    )
}