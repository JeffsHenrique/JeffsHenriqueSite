"use client";

import { type MouseEventHandler, useState } from "react";
import { Contact } from "./Contact";
import { ThemeSwitch } from "./ThemeSwitch";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Home, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { useIntlayer } from "react-intlayer";
import LanguageSwitch from "./LanguageSwitch";

interface HeaderProps {
	scrollToProject?: MouseEventHandler<HTMLButtonElement>;
	scrollToKnowledge?: MouseEventHandler<HTMLButtonElement>;
	scrollToExperience?: MouseEventHandler<HTMLButtonElement>;
	shouldGoBackToHome?: boolean;
}

export const Header = ({
	scrollToProject,
	scrollToKnowledge,
	scrollToExperience,
	shouldGoBackToHome,
}: HeaderProps) => {
	const [contactIsOpen, setContactIsOpen] = useState(false);
	const { projects, skills, experiences, contact } = useIntlayer("header");

	const handleContactOpen = () => {
		setContactIsOpen(!contactIsOpen);
	};

	return (
		<header className="fixed w-full top-0 z-10 p-2 h-14 flex flex-row justify-start items-center gap-16 bg-sky-900 dark:bg-slate-950 drop-shadow-sky-900 dark:drop-shadow-slate-950 drop-shadow-md dark:drop-shadow-xl text-sky-200 shadow-xl">
			<h1 className="px-4 hover:scale-110 hover:text-sky-300 transition-all duration-500">
				<Link href="/">
					<Home size={40} />
				</Link>
			</h1>

			<hr className="h-10 border opacity-35 border-slate-600 dark:border-slate-400 max-laptop:hidden" />

			<div className="hidden max-laptop:flex w-full justify-end items-center">
				<LanguageSwitch />

				{/* <StyledButton
                        id="more-button"
                        aria-controls={open ? 'more-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleMoreButtonClick}
                    >
                        <MoreHorizIcon sx={{ fontSize: 40 }} />
                    </StyledButton> */}

				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<button type="button">
							<MoreHorizontal size={40} />
						</button>
					</DropdownMenuTrigger>

					<DropdownMenuContent className="bg-sky-900 dark:bg-slate-950">
						<Link href="/projetos">
							<DropdownMenuItem className="text-sky-600 dark:text-sky-200">
								{`${projects}`}
							</DropdownMenuItem>
							{/* <MenuItem onClick={handleMoreButtonClose}>
                                </MenuItem> */}
						</Link>

						<Link href="/conhecimentos">
							<DropdownMenuItem className="text-sky-600 dark:text-sky-200">
								{`${skills}`}
							</DropdownMenuItem>
						</Link>

						<Link href="/experiencias">
							<DropdownMenuItem className="text-sky-600 dark:text-sky-200">
								{`${experiences}`}
							</DropdownMenuItem>
						</Link>

						<DropdownMenuItem
							className="text-sky-600 dark:text-sky-200"
							onClick={handleContactOpen}
						>
							{`${contact}`}
						</DropdownMenuItem>

						<DropdownMenuItem>
							<ThemeSwitch />
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>

			<div className="flex w-full justify-between max-laptop:hidden">
				<ul className="flex flex-row items-center justify-end text-lg gap-8">
					<li className="hover:scale-105 hover:text-sky-300 transition-all">
						{shouldGoBackToHome ? (
							<Link href="/"> {`${projects}`}</Link>
						) : (
							<button
								type="button"
								className="cursor-pointer"
								onClick={scrollToProject}
							>
								{" "}
								{`${projects}`}
							</button>
						)}
					</li>
					<li className="hover:scale-105 hover:text-sky-300 transition-all">
						{shouldGoBackToHome ? (
							<Link href="/"> {`${skills}`}</Link>
						) : (
							<button
								type="button"
								className="cursor-pointer"
								onClick={scrollToKnowledge}
							>
								{" "}
								{`${skills}`}
							</button>
						)}
					</li>
					<li className="hover:scale-105 hover:text-sky-300 transition-all">
						{shouldGoBackToHome ? (
							<Link href="/"> {`${experiences}`}</Link>
						) : (
							<button
								type="button"
								className="cursor-pointer"
								onClick={scrollToExperience}
							>
								{" "}
								{`${experiences}`}
							</button>
						)}
					</li>
					<li className="hover:scale-105 hover:text-sky-300 transition-all">
						<button
							type="button"
							className="cursor-pointer"
							onClick={handleContactOpen}
						>
							{`${contact}`}
						</button>

						<Contact open={contactIsOpen} onClose={handleContactOpen} />
					</li>
				</ul>

				<div className="flex justify-center items-center gap-4">
					<LanguageSwitch />

					<ThemeSwitch />
				</div>
			</div>
		</header>
	);
};
