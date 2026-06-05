import { Section } from "@/app/components/Section";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useIntlayer } from "react-intlayer";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import type { Project } from "../types/Project";
import { useProjectsService } from "../utils/ProjectsData";

interface ProjectProps {
	isPreview?: boolean;
}

export const Projects = ({ isPreview }: ProjectProps) => {
	const [projects, setProjects] = useState<Project[]>([]);
	const [shouldProjectDescriptionShow, setShouldProjectDescriptionShow] =
		useState<boolean>(false);
	const [shouldTechsUsedShow, setShouldTechsUsedShow] =
		useState<boolean>(false);

	const [lightboxOpen, setLightboxOpen] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

	const { getProjects } = useProjectsService();

	const { projects: projectsIntl, swiper } = useIntlayer("projects");

	const filteredProjectsByLevel = projects.sort(
		(a, b) => b.projectLevel - a.projectLevel,
	);

	const images = filteredProjectsByLevel.flatMap((projeto) =>
		projeto.images.map((img) => ({ src: img, alt: projeto.imageAlt })),
	);

	const handleSelectedProjectImgOpen = (img: string) => {
		const index = images.findIndex((image) => image.src === img);
		setCurrentImageIndex(index);
		setLightboxOpen(true);
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
								<p className="my-2 text-5xl text-center max-laptop:text-lg font-bold">
									{project.title.toUpperCase()}
								</p>
								<p className="relative inline-block group text-sm text-center max-laptop:text-lg text-slate-700 dark:text-slate-300">
									{project.description.summary}
									<span className="absolute -bottom-3 left-0 w-full h-1 bg-linear-to-r from-transparent via-sky-900 dark:via-sky-200 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
								</p>
								<Swiper
									modules={[Pagination]}
									spaceBetween={1}
									slidesPerView={1}
									pagination={{ clickable: true }}
									className="w-full max-laptop:size-48"
								>
									{project.images.map((img, index) => (
										<>
											{/** biome-ignore lint/suspicious/noArrayIndexKey: <> */}
											<SwiperSlide key={index}>
												<div className="my-2 flex justify-center items-center overflow-hidden">
													<div className="m-2 p-2 border border-slate-700 dark:border-slate-300 rounded-lg transition-all hover:shadow-lg w-full text-center">
														<button
															type="button"
															onClick={() => handleSelectedProjectImgOpen(img)}
															className="w-full"
														>
															<Image
																width={384}
																height={384}
																className="w-full h-auto max-h-96 object-contain rounded-md cursor-pointer hover:opacity-90 transition-opacity"
																src={img}
																alt={project.imageAlt}
																loading="lazy"
															/>
														</button>
													</div>
												</div>
											</SwiperSlide>
										</>
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
								<br />
								<p className="flex flex-col mb-2 px-2 text-center max-laptop:text-xs text-purple-700 dark:text-purple-500">
									{projectsIntl.common_fields.project_description}{" "}
								</p>
								<span className="font-bold text-center px-2 text-sky-900 dark:text-sky-200">
									{project.description.projectDetails
										.split("\n\n")
										.map((line, index) => (
											// biome-ignore lint/suspicious/noArrayIndexKey: <>
											<p key={index}>• {line}</p>
										))}
								</span>

								<br />

								<p className="flex flex-col mb-2 px-2 text-center max-laptop:text-xs text-purple-700 dark:text-purple-500">
									{projectsIntl.common_fields.tools_used}{" "}
									<span className="font-bold text-sky-900 dark:text-sky-200">
										{project.description.techsUsed}
									</span>
								</p>
							</div>
						</Section>
					);
				},
			)}

			<Lightbox
				open={lightboxOpen}
				close={() => setLightboxOpen(false)}
				slides={images}
				index={currentImageIndex}
			/>

			{/* {selectedProjectImg && (
				<PhotoDialog
					open={Boolean(selectedProjectImg)}
					onClose={handleSelectedProjectImgClosed}
					source={selectedProjectImg}
				/>
			)} */}
		</div>
	);
};
