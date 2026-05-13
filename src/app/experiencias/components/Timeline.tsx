"use client";

import { useTheme } from "@/app/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { Briefcase, GraduationCap } from "lucide-react";
import { useEffect, useState } from "react";
import type { Experience } from "../types/Experience";
import { experiencesData } from "../utils/ExperiencesData";

import { VerticalTimelineSection } from "@/app/components/Section";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { PhotoDialog } from "../../components/PhotoDialog";

export const TimelineContent = () => {
	const themeCtx = useTheme();

	const [experiences, setExperiences] = useState<Experience[]>([]);
	const [selectedPic, setSelectedPic] = useState<string | null>("");
	const [filteredType, setFilteredType] = useState<string>("");

	const currentLang = localStorage.getItem("LangContextKey");

	useEffect(() => {
		async function getExperiences() {
			try {
				const data = await experiencesData.getExperiences();
				setExperiences(data);
			} catch (error) {
				console.error(error);
			}
		}

		getExperiences();
	}, []);

	const handleSelectedPictureOpen = (image: string) => {
		setSelectedPic(image);
	};

	const handleSelectedPictureClose = () => {
		setSelectedPic(null);
	};

	const parseDate = (dateStr: string) => {
		const [day, month, year] = dateStr.split("/").map(Number);

		return new Date(year, month - 1, day);
	};

	const calculatePeriod = (startDate: string, endDate: string) => {
		const start = parseDate(startDate).getTime();
		const end = parseDate(endDate).getTime();

		const diffInMs = end - start;

		const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

		let months = Math.floor(diffInDays / 30.44);
		const years = Math.floor(months / 12);
		months = months % 12;

		return { years, months };
	};

	const filteredExperiences = experiences
		.sort((a, b) => {
			const dateA = parseDate(a.period.start);
			const dateB = parseDate(b.period.start);

			return dateB.getTime() - dateA.getTime();
		})
		.filter((type) =>
			filteredType === "" ? type : type.professionalType === filteredType,
		);

	// STYLES
	const workContentStyle =
		themeCtx?.theme === "dark"
			? { background: "#185688", color: "#bae6fd" }
			: { background: "#7dd3fc", color: "#0c4a6e" };
	const studyContentStyle =
		themeCtx?.theme === "dark"
			? { background: "#8224f5", color: "#bae6fd" }
			: { background: "#bf8cfe", color: "#0c4a6e" };

	const workContentArrowStyle =
		themeCtx?.theme === "dark" ? "#185688" : "#7dd3fc";
	const studyContentArrowStyle =
		themeCtx?.theme === "dark" ? "#8224f5" : "#bf8cfe";

	const workIconStyle =
		themeCtx?.theme === "dark"
			? { background: "#0a263d", color: "#bae6fd" }
			: { background: "#62b5fa", color: "#0c4a6e" };
	const studyIconStyle =
		themeCtx?.theme === "dark"
			? { background: "#691dc4", color: "#bae6fd" }
			: { background: "#9d72d1", color: "#0c4a6e" };

	return (
		<div className="m-2 p-2 flex flex-col gap-4">
			<div className="p-2 flex flex-row max-laptop:flex-col gap-4 max-laptop:gap-2 justify-center items-center max-laptop:text-xs text-sky-900 dark:text-sky-200">
				<p>{currentLang === "us-en" ? `Filter by:` : "Filtrar por:"}</p>
				<Button
					variant={filteredType === "study" ? "default" : "ghost"}
					className={cn(
						"rounded-md w-32 h-10 text-sm border-purple-400 hover:border-purple-500 dark:border-purple-600 dark:hover:border-purple-700 text-purple-900 dark:text-purple-200 hover:text-purple-950 dark:hover:text-purple-300",
						{
							"bg-purple-400 hover:bg-purple-500 dark:bg-purple-600 dark:hover:bg-purple-700":
								filteredType === "study",
						},
					)}
					onClick={() => setFilteredType("study")}
				>
					{currentLang === "us-en" ? `Study` : "Especialização"}
				</Button>
				<Button
					variant={filteredType === "work" ? "default" : "ghost"}
					className={cn(
						"rounded-md w-32 h-10 text-sm border-sky-400 hover:border-sky-500 dark:border-sky-600 dark:hover:border-sky-700 text-sky-900 dark:text-sky-200 hover:text-sky-950 dark:hover:text-sky-300",
						{
							"bg-sky-400 hover:bg-sky-500 dark:bg-sky-600 dark:hover:bg-sky-700":
								filteredType === "work",
						},
					)}
					onClick={() => setFilteredType("work")}
				>
					{currentLang === "us-en" ? `Work` : "Trabalho"}
				</Button>
				<Button
					variant={filteredType === "" ? "default" : "ghost"}
					className={cn(
						"rounded-md w-32 h-10 text-sm border-emerald-400 hover:border-emerald-500 dark:border-emerald-600 dark:hover:border-emerald-700 text-emerald-900 dark:text-emerald-200 hover:text-emerald-950 dark:hover:text-emerald-300",
						{
							"bg-emerald-400 hover:bg-emerald-500 dark:bg-emerald-600 dark:hover:bg-emerald-700":
								filteredType === "",
						},
					)}
					onClick={() => setFilteredType("")}
				>
					{currentLang === "us-en" ? `All` : "Todos"}
				</Button>
			</div>

			<VerticalTimeline
				lineColor={themeCtx?.theme === "dark" ? "#185688" : "#7dd3fc"}
			>
				{filteredExperiences.map((experience, index) => {
					const experiencePeriod = () => {
						const { years, months } = calculatePeriod(
							experience.period.start,
							experience.period.end,
						);

						const yearLabel =
							years === 1
								? `${currentLang === "us-en" ? "year" : "ano"}`
								: `${currentLang === "us-en" ? "years" : "anos"}`;
						const monthLabel =
							months === 1
								? `${currentLang === "us-en" ? "month" : "mês"}`
								: `${currentLang === "us-en" ? "months" : "meses"}`;

						if (years === 0) {
							if (months < 1) {
								return `${currentLang === "us-en" ? `Less than 1 month` : "Menos de 1 mês"}`;
							}
							return `${months} ${monthLabel}`;
						}

						if (months > 0) {
							return `${years} ${yearLabel} ${currentLang === "us-en" ? "and" : "e"} ${months} ${monthLabel}`;
						}

						return `${years} ${yearLabel}`;
					};

					return (
						<div
							key={`experience-${
								// biome-ignore lint/suspicious/noArrayIndexKey: <>
								index
							}`}
							className="vertical-timeline-element transition-all hover:scale-105"
						>
							<VerticalTimelineSection>
								<VerticalTimelineElement
									contentStyle={
										experience.professionalType === "work"
											? workContentStyle
											: studyContentStyle
									}
									contentArrowStyle={{
										borderRight: `7px solid ${experience.professionalType === "work" ? workContentArrowStyle : studyContentArrowStyle}`,
									}}
									date={`${experience.period.start} - ${experience.period.end} • ${experiencePeriod()} `}
									dateClassName="text-black dark:text-white"
									iconStyle={
										experience.professionalType === "work"
											? workIconStyle
											: studyIconStyle
									}
									icon={
										experience.professionalType === "work" ? (
											<Briefcase size={24} />
										) : (
											<GraduationCap size={24} />
										)
									}
									visible={true}
									style={{
										minHeight: "200px",
									}}
								>
									<div className="flex flex-col gap-2 justify-center items-center text-center">
										{experience.isMyCurrentExperience && (
											<p className="absolute top-0 px-2 bg-green-900 rounded-full shadow-lg text-sky-200">
												{currentLang === "us-en" ? `Current` : "Atualmente"}
											</p>
										)}
										<h1 className="text-2xl max-tablet:text-base pt-8">
											{experience.positionName}
										</h1>
										<h3 className="max-tablet:text-xs">
											{experience.companyName}
										</h3>
										<h3 className="max-tablet:text-xs">
											{experience.mainRole}
										</h3>
										{experience.mainTools && (
											<h3 className="max-tablet:text-xs">
												{currentLang === "us-en"
													? `Main Tools: `
													: "Principais Ferramentas: "}
												<span className="font-bold">
													{experience.mainTools}
												</span>
											</h3>
										)}
									</div>
									{experience.photos && (
										<div className="mt-4 flex flex-row gap-4">
											{experience.photos?.map((pic, index) => {
												return (
													<button
														// biome-ignore lint/suspicious/noArrayIndexKey: <>
														key={index}
														type="button"
														className="cursor-pointer"
														onClick={() => handleSelectedPictureOpen(pic)}
													>
														{/** biome-ignore lint/suspicious/noArrayIndexKey: <> */}
														<div key={index}>
															<Image
																alt={`image ${index}`}
																unoptimized
																width={100}
																height={100}
																className="w-10 max-tablet:w-6 hover:animate-zoomIn aspect-square rounded-lg shadow-lg"
																src={pic}
															/>
														</div>
													</button>
												);
											})}
										</div>
									)}
								</VerticalTimelineElement>
							</VerticalTimelineSection>
						</div>
					);
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
	);
};
