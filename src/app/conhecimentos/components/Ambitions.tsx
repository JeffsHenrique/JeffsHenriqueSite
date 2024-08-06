import { useCallback, useEffect, useState } from 'react'
import { Ambition } from '../types/Ambition'
import { ambitionsData } from '../utils/AmbitionsData'
import { Section } from '@/app/components/Section'

export const Ambitions = () => {
    const [ambitions, setAmbitions] = useState<Ambition[]>([])

    const getAmbitions = useCallback(async () => {
        try {
            const data = await ambitionsData.getAmbitions()
            setAmbitions(data)
        } catch (error) {
            console.error(error)
        }
    }, [])

    useEffect(() => {
        getAmbitions()
    }, [getAmbitions])

    return (
        <Section>
            <div className="m-2 p-2 grid grid-cols-6 max-tablet:grid-cols-2 max-laptop:grid-cols-3 gap-12 max-tablet:gap-6 max-laptop:gap-8 text-sky-900 dark:text-sky-200 border-2 border-slate-700 dark:border-slate-300 shadow-lg rounded-md">
                {ambitions.map((ambition) => {
                    return (
                        <div className="flex flex-col items-center gap-2 border border-slate-700 dark:border-slate-300 shadow-lg rounded-md">
                            <img className="w-24 mt-2 max-tablet:w-12 max-laptop:w-16" src={ambition.image} />
                            <hr className="mx-2 w-11/12 border border-slate-700 dark:border-slate-300" />
                            <p className="mb-2 text-center">{ambition.name}</p>
                        </div>
                    )
                })}
            </div>
        </Section>
    )
}