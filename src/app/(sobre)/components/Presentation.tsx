import catPlaying from "@/app/assets/cat-playing1.gif";
import { Contact } from "@/app/components/Contact";
import { ChevronDown, ChevronRight } from "lucide-react";
import Image from "next/image";
import { type MouseEventHandler, useState } from "react";
import { useIntlayer } from "react-intlayer";

interface PresentationProps {
	scrollToGames: MouseEventHandler<HTMLButtonElement>;
}

export const Presentation = ({ scrollToGames }: PresentationProps) => {
	const [contactIsOpen, setContactIsOpen] = useState(false);
	const [shouldWebDevelopmentSectionShow, setShouldWebDevelopmentSectionShow] =
		useState(false);
	const [shouldITServicesSectionShow, setShouldITServicesSectionShow] =
		useState(false);

	const { about_me } = useIntlayer("about");

	const handleOpenContact = () => {
		setContactIsOpen(!contactIsOpen);
	};

	return (
		<div className="w-1/2 max-laptop:w-full border-2 overflow-auto border-slate-700 dark:border-slate-300 rounded-md shadow-lg text-sky-900 dark:text-sky-200 p-2">
			<div className="flex justify-center">
				<h1 className="my-2 text-5xl max-laptop:text-3xl text-center">
					{" "}
					{`${about_me.title}`}
				</h1>
			</div>

			<hr className="my-2 border border-slate-700 dark:border-slate-300" />

			<div className="flex flex-col gap-2 text-lg max-laptop:text-sm text-center px-2">
				<p>
					{about_me.texts.text_1}
					<br />
					{/* {about_me.texts.text_2}
					<br />
					{about_me.texts.text_3} 😊
					<br /> */}
				</p>

				<br />

				<div className="flex flex-col justify-center gap-4">
					<button
						type="button"
						className="flex items-center w-full gap-4 cursor-pointer transition-all duration-200 text-purple-500 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-500"
						onClick={() => {
							setShouldWebDevelopmentSectionShow(
								!shouldWebDevelopmentSectionShow,
							);
							setShouldITServicesSectionShow(false);
						}}
					>
						{shouldWebDevelopmentSectionShow ? (
							<ChevronDown size={32} />
						) : (
							<ChevronRight size={32} />
						)}

						<p>{about_me.texts.text_2.toUpperCase()}</p>
					</button>

					{shouldWebDevelopmentSectionShow && (
						<div className="text-left">
							<p>{about_me.texts.text_3}</p>
							<br />
							<ul>
								<li>{about_me.texts.text_4.list_1}</li>
								<li>{about_me.texts.text_4.list_2}</li>
								<li>{about_me.texts.text_4.list_3}</li>
								<li>{about_me.texts.text_4.list_4}</li>
							</ul>
							<br />
							<p>{about_me.texts.text_5}</p>
						</div>
					)}
				</div>

				<br />

				<div className="flex flex-col justify-center gap-4">
					<button
						type="button"
						className="flex items-center w-full gap-4 cursor-pointer transition-all duration-200 text-purple-500 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-500"
						onClick={() => {
							setShouldITServicesSectionShow(!shouldITServicesSectionShow);
							setShouldWebDevelopmentSectionShow(false);
						}}
					>
						{shouldITServicesSectionShow ? (
							<ChevronDown size={32} />
						) : (
							<ChevronRight size={32} />
						)}

						<p>{about_me.texts.text_6.toUpperCase()}</p>
					</button>

					{shouldITServicesSectionShow && (
						<div className="text-left">
							<p>{about_me.texts.text_7}</p>
							<br />
							<ul>
								<li>{about_me.texts.text_8.list_1}</li>
								<li>{about_me.texts.text_8.list_2}</li>
								<li>{about_me.texts.text_8.list_3}</li>
								<li>{about_me.texts.text_8.list_4}</li>
								<li>{about_me.texts.text_8.list_5}</li>
							</ul>
							<br />
						</div>
					)}
				</div>

				<br />

				<p>
					{about_me.texts.text_9} {about_me.links.projects}{" "}
					{about_me.links.skills} {about_me.links.experiences}{" "}
				</p>

				<p className="my-4">
					{about_me.texts.text_11}{" "}
					<button type="button" className="underline font-bold">
						{about_me.links.contact}
					</button>{" "}
					{about_me.texts.text_12}
				</p>

				<Contact open={contactIsOpen} onClose={handleOpenContact} />

				<p className="text-sm">
					{about_me.texts.text_13}{" "}
					<button
						type="button"
						className="text-purple-700 dark:text-purple-500"
						onClick={scrollToGames}
					>
						{about_me.texts.text_14}
					</button>
				</p>

				<div className="flex justify-center items-center">
					<Image
						alt="Cats playing"
						className="rounded-md"
						width={150}
						height={150}
						src={catPlaying.src}
					/>
				</div>
			</div>
		</div>
	);
};
