import { PhotoDialog } from "@/app/components/PhotoDialog";
import { Section } from "@/app/components/Section";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useIntlayer } from "react-intlayer";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Project } from "../types/Project";
import { useProjectsService } from "../utils/ProjectsData";

interface ProjectProps {
	isPreview?: boolean;
}

export const Projects = ({ isPreview }: ProjectProps) => {
	const [projects, setProjects] = useState<Project[]>([]);
	const [selectedProjectImg, setSelectedProjectImg] = useState<string | null>(
		"",
	);
	const { getProjects } = useProjectsService();

	const { projects: projectsIntl, swiper } = useIntlayer("projects");

	const filteredProjectsByLevel = projects.sort(
		(a, b) => b.projectLevel - a.projectLevel,
	);

	const handleSelectedProjectImgOpen = (image: string) => {
		setSelectedProjectImg(image);
	};

	const handleSelectedProjectImgClosed = () => {
		setSelectedProjectImg(null);
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <>
	useEffect(() => {
		async function fetchProjects() {
			try {
				const data = await getProjects();
				setProjects(data);
			} catch (error) {
				console.error(error);
			}
		}

		fetchProjects();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [projectsIntl]);

	const twoMostRelevantProjects = filteredProjectsByLevel.slice(0, 2);

	return (
		<div className="m-2 p-2 grid grid-cols-2 max-laptop:flex max-laptop:flex-col gap-12 text-sky-900 dark:text-sky-200">
			{(isPreview ? twoMostRelevantProjects : filteredProjectsByLevel).map(
				(project) => {
					return (
						<Section key={project.title}>
							<div className="min-h-full flex flex-col items-center justify-between border-2 bg-sky-200 dark:bg-slate-900 border-slate-700 dark:border-slate-300 hover:scale-[102%] transition-all duration-400 shadow-lg rounded-md">
								<p className="my-2 text-3xl text-center max-laptop:text-lg font-bold underline">
									{project.title}
								</p>
								<p className="my-2 flex flex-col items-center overflow-auto px-2 text-center max-laptop:text-xs text-purple-700 dark:text-purple-500">
									{projectsIntl.common_fields.project_description}
									<span className="font-bold text-sky-900 dark:text-sky-200">
										{project.description.projectDetails}
									</span>
								</p>
								<p className="mb-2 px-2 text-center max-laptop:text-xs text-purple-700 dark:text-purple-500">
									{projectsIntl.common_fields.tools_used}{" "}
									<span className="font-bold text-sky-900 dark:text-sky-200">
										{project.description.techsUsed}
									</span>
								</p>
								<Swiper
									modules={[Pagination]}
									spaceBetween={1}
									slidesPerView={1}
									pagination={{ clickable: true }}
									className="w-9/12 max-laptop:size-48"
								>
									{project.images.map((img, index) => (
										// biome-ignore lint/suspicious/noArrayIndexKey: <>
										<SwiperSlide key={index}>
											<div className="my-2 flex justify-center items-center overflow-hidden border border-slate-700 dark:border-slate-300 shadow-lg rounded-md">
												<div className="m-2 p-2">
													<button
														type="button"
														onClick={() => handleSelectedProjectImgOpen(img)}
													>
														<Image
															width={384}
															height={384}
															className="size-96 max-laptop:size-24 object-cover rounded-md cursor-pointer"
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
								<p className="mb-2 px-2 text-center max-laptop:text-xs text-green-800 dark:text-green-500">
									{swiper.swipe}
								</p>
								<p className="mb-2 px-2 text-center max-laptop:text-xs text-green-800 dark:text-green-500">
									{swiper.click}
								</p>
								<div className="flex flex-col gap-4">
									{project.externalLinks?.projectLink && (
										<a
											className="my-2 px-2 text-xl text-center max-laptop:text-sm underline text-sky-900 dark:text-sky-200"
											href={project.externalLinks.projectLink}
											target="_blank"
											rel="noopener noreferrer"
										>
											{swiper.project_link}
										</a>
									)}

									{project.externalLinks?.ref && (
										<p className="my-2 px-2 text-center max-laptop:text-xs text-purple-700 dark:text-purple-500">
											{swiper.ref}
											<a
												className="font-bold underline text-sky-900 dark:text-sky-200"
												href={project.externalLinks.ref.link}
												target="_blank"
												rel="noopener noreferrer"
											>
												{project.externalLinks.ref.name}
											</a>
										</p>
									)}

									{project.externalLinks?.videos && (
										<div>
											{project.externalLinks.videos.map((video, index) => (
												<p
													// biome-ignore lint/suspicious/noArrayIndexKey: <>
													key={index}
													className="my-2 px-2 text-center max-laptop:text-xs text-purple-700 dark:text-purple-500"
												>
													👉{" "}
													<a
														className="font-bold underline text-sky-900 dark:text-sky-200"
														href={video}
														target="_blank"
														rel="noopener noreferrer"
													>
														{projectsIntl.common_fields.old_dashboard} - Vídeo{" "}
														{index + 1}
													</a>
												</p>
											))}
										</div>
									)}
								</div>
							</div>
						</Section>
					);
				},
			)}

			{selectedProjectImg && (
				<PhotoDialog
					open={Boolean(selectedProjectImg)}
					onClose={handleSelectedProjectImgClosed}
					source={selectedProjectImg}
				/>
			)}
		</div>
	);
};
