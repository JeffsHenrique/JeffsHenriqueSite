"use client";

import { dialogBox } from "@/app/utils/Styles";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";
import { useIntlayer } from "react-intlayer";

export interface HelperProps {
	open: boolean;
	onClose: () => void;
}

export const ProficiencySkillsHelper = (props: HelperProps) => {
	const { open, onClose } = props;
	const [shouldSuperficialShow, setShouldSuperficialShow] =
		useState<boolean>(false);
	const [shouldBasicShow, setShouldBasicShow] = useState<boolean>(false);
	const [shouldBeginnerShow, setShouldBeginnerShow] = useState<boolean>(false);
	const [shouldIntermediateShow, setShouldIntermediateShow] =
		useState<boolean>(false);
	const [shouldAdvancedShow, setShouldAdvancedShow] = useState<boolean>(false);
	const [shouldSpecialistShow, setShouldSpecialistShow] =
		useState<boolean>(false);
	const [shouldMasterShow, setShouldMasterShow] = useState<boolean>(false);

	const { tooltips, proficiency_skills_helper } = useIntlayer("skills");

	return (
		<Dialog open={open} onOpenChange={onClose}>
			<DialogContent className={dialogBox} showCloseButton={false}>
				<DialogHeader>
					<DialogTitle className="text-sky-900 dark:text-sky-200 flex justify-center text-lg">
						{proficiency_skills_helper.title}
					</DialogTitle>
				</DialogHeader>
				<div className="text-sky-900 dark:text-sky-200 my-4 flex flex-col gap-4">
					<p>{proficiency_skills_helper.description}</p>

					<div className="px-4 bg-sky-200 dark:bg-slate-800 border border-slate-700 dark:border-slate-300 rounded-md">
						<ul className="m-4 h-96 overflow-auto flex flex-col gap-4">
							<li>
								<Tooltip disableHoverableContent>
									<TooltipTrigger>
										<button
											type="button"
											className="cursor-pointer"
											onClick={() =>
												setShouldSuperficialShow(!shouldSuperficialShow)
											}
										>
											<p className="ml-4 text-xl font-bold hover:text-purple-700 dark:hover:text-purple-400 duration-300">
												{proficiency_skills_helper.scale.superficial.title}
											</p>
										</button>
									</TooltipTrigger>

									<TooltipContent>
										{tooltips.click_to_show_description}
									</TooltipContent>
								</Tooltip>

								{shouldSuperficialShow && (
									<ul className="ml-16 my-2 flex flex-col gap-4 list-disc">
										<li>
											{
												proficiency_skills_helper.scale.superficial.description
													.text_1
											}
										</li>
										<li>
											{
												proficiency_skills_helper.scale.superficial.description
													.text_2
											}
										</li>
									</ul>
								)}
							</li>

							<li>
								<Tooltip disableHoverableContent>
									<TooltipTrigger>
										<button
											type="button"
											className="cursor-pointer"
											onClick={() => setShouldBasicShow(!shouldBasicShow)}
										>
											<p className="ml-4 text-xl font-bold hover:text-purple-700 dark:hover:text-purple-400 duration-300">
												{proficiency_skills_helper.scale.basic.title}
											</p>
										</button>
									</TooltipTrigger>

									<TooltipContent>
										{tooltips.click_to_show_description}
									</TooltipContent>
								</Tooltip>

								{shouldBasicShow && (
									<ul className="ml-16 my-2 flex flex-col gap-4 list-disc">
										<li>
											{proficiency_skills_helper.scale.basic.description.text_1}
										</li>
										<li>
											{proficiency_skills_helper.scale.basic.description.text_2}
										</li>
										<li>
											{proficiency_skills_helper.scale.basic.description.text_3}
										</li>
									</ul>
								)}
							</li>

							<li>
								<Tooltip disableHoverableContent>
									<TooltipTrigger>
										<button
											type="button"
											className="cursor-pointer"
											onClick={() => setShouldBeginnerShow(!shouldBeginnerShow)}
										>
											<p className="ml-4 text-xl font-bold hover:text-purple-700 dark:hover:text-purple-400 duration-300">
												{proficiency_skills_helper.scale.beginner.title}
											</p>
										</button>
									</TooltipTrigger>

									<TooltipContent>
										{tooltips.click_to_show_description}
									</TooltipContent>
								</Tooltip>

								{shouldBeginnerShow && (
									<ul className="ml-16 my-2 flex flex-col gap-4 list-disc">
										<li>
											{
												proficiency_skills_helper.scale.beginner.description
													.text_1
											}
										</li>
										<li>
											{
												proficiency_skills_helper.scale.beginner.description
													.text_2
											}
										</li>
										<li>
											{
												proficiency_skills_helper.scale.beginner.description
													.text_3
											}
										</li>
									</ul>
								)}
							</li>

							<li>
								<Tooltip disableHoverableContent>
									<TooltipTrigger>
										<button
											type="button"
											className="cursor-pointer"
											onClick={() =>
												setShouldIntermediateShow(!shouldIntermediateShow)
											}
										>
											<p className="ml-4 text-xl font-bold hover:text-purple-700 dark:hover:text-purple-400 duration-300">
												{proficiency_skills_helper.scale.intermediate.title}
											</p>
										</button>
									</TooltipTrigger>

									<TooltipContent>
										{tooltips.click_to_show_description}
									</TooltipContent>
								</Tooltip>

								{shouldIntermediateShow && (
									<ul className="ml-16 my-2 flex flex-col gap-4 list-disc">
										<li>
											{
												proficiency_skills_helper.scale.intermediate.description
													.text_1
											}
										</li>
										<li>
											{
												proficiency_skills_helper.scale.intermediate.description
													.text_2
											}
										</li>
										<li>
											{
												proficiency_skills_helper.scale.intermediate.description
													.text_3
											}
										</li>
									</ul>
								)}
							</li>

							<li>
								<Tooltip disableHoverableContent>
									<TooltipTrigger>
										<button
											type="button"
											className="cursor-pointer"
											onClick={() => setShouldAdvancedShow(!shouldAdvancedShow)}
										>
											<p className="ml-4 text-xl font-bold hover:text-purple-700 dark:hover:text-purple-400 duration-300">
												{proficiency_skills_helper.scale.advanced.title}
											</p>
										</button>
									</TooltipTrigger>

									<TooltipContent>
										{tooltips.click_to_show_description}
									</TooltipContent>
								</Tooltip>

								{shouldAdvancedShow && (
									<ul className="ml-16 my-2 flex flex-col gap-4 list-disc">
										<li>
											{
												proficiency_skills_helper.scale.advanced.description
													.text_1
											}
										</li>
										<li>
											{
												proficiency_skills_helper.scale.advanced.description
													.text_2
											}
										</li>
										<li>
											{
												proficiency_skills_helper.scale.advanced.description
													.text_3
											}
										</li>
									</ul>
								)}
							</li>

							<li>
								<Tooltip disableHoverableContent>
									<TooltipTrigger>
										<button
											type="button"
											className="cursor-pointer"
											onClick={() =>
												setShouldSpecialistShow(!shouldSpecialistShow)
											}
										>
											<p className="ml-4 text-xl font-bold hover:text-purple-700 dark:hover:text-purple-400 duration-300">
												{proficiency_skills_helper.scale.specialist.title}
											</p>
										</button>
									</TooltipTrigger>

									<TooltipContent>
										{tooltips.click_to_show_description}
									</TooltipContent>
								</Tooltip>

								{shouldSpecialistShow && (
									<ul className="ml-16 my-2 flex flex-col gap-4 list-disc">
										<li>
											{
												proficiency_skills_helper.scale.specialist.description
													.text_1
											}
										</li>
										<li>
											{
												proficiency_skills_helper.scale.specialist.description
													.text_2
											}
										</li>
										<li>
											{
												proficiency_skills_helper.scale.specialist.description
													.text_3
											}
										</li>
									</ul>
								)}
							</li>

							<li>
								<Tooltip disableHoverableContent>
									<TooltipTrigger>
										<button
											type="button"
											className="cursor-pointer"
											onClick={() => setShouldMasterShow(!shouldMasterShow)}
										>
											<p className="ml-4 text-xl font-bold hover:text-purple-700 dark:hover:text-purple-400 duration-300">
												{proficiency_skills_helper.scale.master.title}
											</p>
										</button>
									</TooltipTrigger>

									<TooltipContent>
										{tooltips.click_to_show_description}
									</TooltipContent>
								</Tooltip>

								{shouldMasterShow && (
									<ul className="ml-16 my-2 flex flex-col gap-4 list-disc">
										<li>
											{
												proficiency_skills_helper.scale.master.description
													.text_1
											}
										</li>
										<li>
											{
												proficiency_skills_helper.scale.master.description
													.text_2
											}
										</li>
										<li>
											{
												proficiency_skills_helper.scale.master.description
													.text_3
											}
										</li>
										<li>
											{
												proficiency_skills_helper.scale.master.description
													.text_4
											}
										</li>
									</ul>
								)}
							</li>
						</ul>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
};
