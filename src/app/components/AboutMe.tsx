import catPlaying from "@/app/assets/cat-playing1.gif";
import Image from "next/image";
import Link from "next/link";
import { type MouseEventHandler, useState } from "react";
import { Contact } from "./Contact";

interface AboutMeProps {
	scrollToGames: MouseEventHandler<HTMLButtonElement>;
}

export const AboutMe = ({ scrollToGames }: AboutMeProps) => {
	const [contactIsOpen, setContactIsOpen] = useState(false);

	const currentLang = localStorage.getItem("LangContextKey");

	const handleContactOpen = () => {
		setContactIsOpen(!contactIsOpen);
	};

	return (
		<div className="w-2/5 max-laptop:w-full border-2 overflow-auto border-slate-700 dark:border-slate-300 rounded-md shadow-lg text-sky-900 dark:text-sky-200 p-2">
			<div className="flex justify-center">
				<h1 className="my-2 text-5xl max-laptop:text-3xl text-center">
					{" "}
					{currentLang === "us-en" ? "About me!" : "Quem sou eu?"}
				</h1>
			</div>

			<hr className="my-2 border border-slate-700 dark:border-slate-300" />

			<div className="flex flex-col gap-2 text-lg max-laptop:text-sm text-center px-2">
				<p>
					{currentLang === "us-en"
						? `I've been in love with technology since my childhood, but I only recently discovered just how much more fascinating this field can be.`
						: "Apaixonado por computador desde a infância, descobri recentemente o quão mais apaixonante essa área pode ser."}
					<br />
					{currentLang === "us-en"
						? "I enjoy putting my knowledge into practice, which I have gained through countless hours of study and experience."
						: "Gosto de colocar os conhecimentos em prática, estes adquiridos com estudo ou vivência."}
					<br />
					{currentLang === "us-en"
						? `I'm also a very communicative person, and I'm always willing to understand the other person's needs.`
						: "Também sou uma pessoa bem comunicativa, estando sempre disposto a entender a outra parte."}{" "}
					😊<br />
				</p>

				<p>
					{currentLang === "us-en"
						? "Take the opportunity to know more about my "
						: "Aproveite para conhecer um pouco dos meus "}
					<Link
						className="font-bold text-sky-700 dark:text-sky-500"
						href="/projetos"
					>
						{currentLang === "us-en" ? "projects" : "projetos"}
					</Link>
					,{" "}
					<Link
						className="font-bold text-sky-700 dark:text-sky-500"
						href="/conhecimentos"
					>
						{currentLang === "us-en" ? "skills" : "conhecimentos"}{" "}
					</Link>
					{currentLang === "us-en" ? "and" : "e"}{" "}
					<Link
						className="font-bold text-sky-700 dark:text-sky-500"
						href="/experiencias"
					>
						{currentLang === "us-en" ? "experiences" : "experiências"}
					</Link>
					.
				</p>

				<p className="my-4">
					{currentLang === "us-en"
						? `Feel free to `
						: "Fique à vontade para entrar em "}
					<button
						type="button"
						className="underline font-bold cursor-pointer"
						onClick={handleContactOpen}
					>
						{currentLang === "us-en" ? `contact` : "contato"}
					</button>{" "}
					{currentLang === "us-en" ? `me!` : "comigo!"} 😁
				</p>

				<Contact open={contactIsOpen} onClose={handleContactOpen} />

				<p className="text-sm hidden md:laptop:block">
					{currentLang === "us-en"
						? `Or, maybe, you can`
						: "Ou, se quiser, você também pode "}
					<button
						type="button"
						className="text-purple-700 dark:text-purple-500 cursor-pointer"
						onClick={scrollToGames}
					>
						{currentLang === "us-en"
							? `take a break and have fun.`
							: "tirar um tempo para se divertir."}
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
