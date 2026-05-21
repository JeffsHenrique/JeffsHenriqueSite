import catPlaying from "@/app/assets/cat-playing1.gif";
import Image from "next/image";
import Link from "next/link";
import { type MouseEventHandler, useState } from "react";
import { useIntlayer } from "react-intlayer";
import { Contact } from "./Contact";

interface AboutMeProps {
	scrollToGames: MouseEventHandler<HTMLButtonElement>;
}

export const AboutMe = ({ scrollToGames }: AboutMeProps) => {
	const [contactIsOpen, setContactIsOpen] = useState(false);

	const { about_me } = useIntlayer("home");

	const handleContactOpen = () => {
		setContactIsOpen(!contactIsOpen);
	};

	return (
		<div className="w-2/5 max-laptop:w-full border-2 overflow-auto border-slate-700 dark:border-slate-300 rounded-md shadow-lg text-sky-900 dark:text-sky-200 p-2">
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
					{about_me.texts.text_2}
					<br />
					{about_me.texts.text_3} 😊
					<br />
				</p>

				<p>
					{about_me.texts.text_4}
					<Link
						className="font-bold text-sky-700 dark:text-sky-500"
						href="/projetos"
					>
						{about_me.links.projects}
					</Link>
					,{" "}
					<Link
						className="font-bold text-sky-700 dark:text-sky-500"
						href="/conhecimentos"
					>
						{about_me.links.skills}{" "}
					</Link>
					{about_me.texts.text_5}{" "}
					<Link
						className="font-bold text-sky-700 dark:text-sky-500"
						href="/experiencias"
					>
						{about_me.links.experiences}
					</Link>
					.
				</p>

				<p className="my-4">
					{about_me.texts.text_6}
					<button
						type="button"
						className="underline font-bold cursor-pointer"
						onClick={handleContactOpen}
					>
						{about_me.links.contact}
					</button>{" "}
					{about_me.texts.text_7} 😁
				</p>

				<Contact open={contactIsOpen} onClose={handleContactOpen} />

				<p className="text-sm hidden md:laptop:block">
					{about_me.texts.text_8}
					<button
						type="button"
						className="text-purple-700 dark:text-purple-500 cursor-pointer"
						onClick={scrollToGames}
					>
						{about_me.texts.text_9}
					</button>
				</p>

				<div className="flex justify-center items-center">
					<Image
						alt="Cat Playing GIF"
						className="rounded-md"
						width={150}
						height={0}
						src={catPlaying.src}
					/>
				</div>
			</div>
		</div>
	);
};
