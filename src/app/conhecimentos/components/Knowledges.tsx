import { ChangeEvent, useCallback, useEffect, useState } from "react"
import { Skill } from "../types/Skill"
import { skillsData } from "../utils/SkillsData"
import { ProficiencySkillsHelper } from "./ProficiencySkillsHelper";
import { Button, Tooltip } from "@mui/material"
import HelpIcon from '@mui/icons-material/Help';
import { Section } from "@/app/components/Section";

export const Knowledges = () => {
    const [skills, setSkills] = useState<Skill[]>([])
    const [shouldProficiencySkillsShow, setShouldProficiencySkillsShow] = useState<boolean>(false)
    const [searchSkill, setSearchSkill] = useState<string>('')
    const [typeSkill, setTypeSkill] = useState<string>('dev')

    const currentLang = localStorage.getItem('LangContextKey')

    const getSkills = useCallback(async () => {
        try {
            const data = await skillsData.getSkills()
            setSkills(data)
        } catch (error) {
            console.error(error)
        }
    }, [])

    const handleSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchSkill(event.target.value)
    }

    const handleProficiencySkillsHelperOpen = () => {
        setShouldProficiencySkillsShow(!shouldProficiencySkillsShow)
    }

    const filteredSkills = skills
        .filter((skill) => skill.type === typeSkill)
        .filter((skill) => skill.name.toLowerCase().includes(searchSkill.toLowerCase()))
        .sort((a, b) => b.progressBar.progressLevel - a.progressBar.progressLevel)

    useEffect(() => {
        getSkills()
    }, [getSkills])

    return (
        <Section>
            <div className="p-2 text-sky-900 dark:text-sky-200">
                <div className="flex max-laptop:flex-col justify-end items-center gap-8 max-laptop:gap-4">
                    <div className="flex flex-row gap-4">
                        <Button variant={typeSkill === 'dev' ? 'contained' : 'outlined'} color='primary' onClick={() => setTypeSkill('dev')}>DEV SKILLS</Button>
                        <Button variant={typeSkill === 'other' ? 'contained' : 'outlined'} color='primary' onClick={() => setTypeSkill('other')}>{currentLang === 'us-en' ? `OTHERS SKILLS` : 'OUTRAS SKILLS'}</Button>
                    </div>
                    <input
                        className="px-2 w-96 max-laptop:w-72 h-8 rounded-md max-laptop:text-center max-laptop:text-xs bg-sky-300 dark:bg-slate-950 border border-slate-700 dark:border-slate-300 text-sky-900 dark:text-sky-200"
                        placeholder={currentLang === 'us-en' ? `Search for a specific skill :)` : 'Procure por uma skill específica :)'}
                        value={searchSkill}
                        onChange={handleSearchInput}
                    />

                    <div className="max-laptop:hidden">
                        <Tooltip
                            title={<h1 className="text-lg text-center">{currentLang === 'us-en' ? `Click to open ` : 'Clique para abrir a '}<span className="font-bold text-purple-300">{currentLang === 'us-en' ? `Skills Proficiency Scale` : 'Escala de Proficiência de Skills'}</span></h1>}
                            arrow
                            disableInteractive
                            placement="top-start"
                        >
                            <button onClick={handleProficiencySkillsHelperOpen}>
                                <HelpIcon
                                    color="info"
                                    fontSize="large"
                                />
                            </button>
                        </Tooltip>
                    </div>
                </div>
            </div>

            {shouldProficiencySkillsShow && (
                <ProficiencySkillsHelper
                    open={shouldProficiencySkillsShow}
                    onClose={handleProficiencySkillsHelperOpen}
                />
            )}

            <div className="m-2 p-2 grid grid-cols-6 max-tablet:grid-cols-2 max-laptop:grid-cols-3 gap-12 max-tablet:gap-6 max-laptop:gap-8 text-sky-900 dark:text-sky-200 border-2 border-slate-700 dark:border-slate-300 shadow-lg rounded-md">
                {filteredSkills
                .map((skill) => {
                    return (
                        <div className="flex flex-col items-center gap-2 border border-slate-700 dark:border-slate-300 shadow-lg rounded-md">
                            <p className="mt-2 flex items-center justify-center text-center">{skill.name}</p>
                            <img className="w-24 max-tablet:w-12 max-laptop:w-16" src={skill.image} />
                            <Tooltip
                                title={<h1 className="text-lg">{currentLang === 'us-en' ? `Progress:` : 'Progresso:'} <span className={`font-bold`}>{skill.progressBar.progressLevel}%</span></h1>}
                                arrow
                                disableInteractive
                            >
                                <div
                                    className="my-2 w-11/12 h-6 max-tablet:h-3 max-laptop:h-4 rounded-md bg-slate-700 dark:bg-slate-950"
                                    data-tooltip-id="skill-tooltip"
                                    data-tooltip-content={`Progresso: ${skill.progressBar.progressLevel}%`}
                                >
                                    <div
                                        className="text-right rounded-md py-3 max-tablet:py-1.5 max-laptop:py-2 text-sky-900 dark:text-sky-200"
                                        style={{
                                            width: `${skill.progressBar.progressLevel}%`,
                                            backgroundColor: `${skill.progressBar.color}`,
                                        }}
                                        >
                                    </div>
                                </div>
                            </Tooltip>
                        </div>
                    )
                })}

                {filteredSkills.length === 0 && <p>{currentLang === 'us-en' ? `Your search didn't match any skill :(` : 'Não foi encontrada a skill :('}</p>}

            </div>
        </Section>
    )
}