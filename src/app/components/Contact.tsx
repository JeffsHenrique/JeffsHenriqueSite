import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import emailjs from "@emailjs/browser";
import { LoaderCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { type ChangeEvent, type FormEvent, useEffect, useState } from "react";
import { useIntlayer } from "react-intlayer";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { useTheme } from "../contexts/ThemeContext";
import type { SocialMedia } from "../types/SocialMedia";
import { socialMediasData } from "../utils/SocialMediasData";
import { dialogBox } from "../utils/Styles";

export interface ContactDialogProps {
	open: boolean;
	onClose: () => void;
}

export const Contact = (props: ContactDialogProps) => {
	const themeCtx = useTheme();
	const [socialMedias, setSocialMedias] = useState<SocialMedia[]>([]);
	const [emailValue, setEmailValue] = useState<string>("");
	const [contentFormValue, setContentFormValue] = useState<string>("");
	const [shouldBackdropshow, setShouldBackdropShow] = useState<boolean>(false);

	const { onClose, open } = props;
	const { toasts, dialog } = useIntlayer("contact");

	const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
		setEmailValue(event.target.value);
	};

	const handleContentFormInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setContentFormValue(event.target.value);
	};

	useEffect(() => {
		async function getSocialMedias() {
			try {
				const data = await socialMediasData.getSocialMedias();
				setSocialMedias(data);
			} catch (error) {
				console.error(error);
			}
		}

		getSocialMedias();
	}, []);

	const sendEmail = (event: FormEvent<HTMLFormElement>): void => {
		event.preventDefault();

		const form = event.target as HTMLFormElement;

		if (emailValue && contentFormValue !== "") {
			handleBackdropOpen();

			emailjs
				.sendForm(
					"service_76185ki",
					"template_tojf4ti",
					form,
					"JimhOtReJ6FpbYmRF",
				)
				.then(
					() => {
						setEmailValue("");
						setContentFormValue("");
						const emailSent = () => {
							toast.success(`${toasts.sent}`, {
								position: "bottom-left",
								autoClose: 3000,
								style: {
									backgroundColor: `${themeCtx?.theme === "dark" ? "#020617" : "#0c4a6e"}`,
									color: "#bae6fd",
								},
								className: "max-tablet:text-sm max-tablet-w-48",
							});
						};
						emailSent();
						handleBackdropClose();
					},
					(error): void => {
						toast.error(`${toasts.error}`, {
							position: "bottom-left",
							autoClose: 3000,
							style: {
								backgroundColor: `${themeCtx?.theme === "dark" ? "#020617" : "#0c4a6e"}`,
								color: "#bae6fd",
							},
							className: "max-tablet:text-sm max-tablet-w-48",
						});
						console.log("Error: ", error);
						handleBackdropClose();
					},
				);
		} else {
			toast.warn(`${toasts.warn}`, {
				position: "bottom-left",
				autoClose: 3000,
				style: {
					backgroundColor: `${themeCtx?.theme === "dark" ? "#020617" : "#0c4a6e"}`,
					color: "#bae6fd",
				},
				className: "max-tablet:text-sm max-tablet-w-48",
			});
		}
	};

	const handleBackdropClose = () => {
		setShouldBackdropShow(false);
	};

	const handleBackdropOpen = () => {
		setShouldBackdropShow(true);
	};

	return (
		<Dialog open={open} onOpenChange={onClose}>
			<DialogContent className={`${dialogBox}`} showCloseButton={false}>
				<DialogHeader className="text-sky-900 dark:text-sky-200 my-4 flex justify-center">
					<DialogTitle className="text-2xl max-tablet:text-lg text-center font-bold">
						{`${dialog.title}`}
					</DialogTitle>
				</DialogHeader>
				<div className="flex max-mobile:flex-col justify-center items-center gap-12 max-mobile:gap-6 text-sky-900 dark:text-sky-200">
					{socialMedias.map((socialMedia) => {
						return (
							<Link
								key={socialMedia.name}
								className="flex flex-col justify-center items-center hover:scale-105 transition-all"
								href={`${socialMedia.href}`}
								target="_blank"
								rel="noopener noreferrer"
							>
								<p className="text-xl max-tablet:text-base font-bold mb-2 underline">
									{socialMedia.name}
								</p>
								<Image
									alt="Social image"
									width={64}
									height={0}
									className="max-tablet:w-12"
									src={`${socialMedia.image}`}
								/>
							</Link>
						);
					})}
				</div>

				<hr className="m-2 border border-slate-700 dark:border-slate-300" />

				<div className="text-sky-900 dark:text-sky-200 flex justify-center">
					<p className="text-2xl max-tablet:text-lg text-center font-bold">
						{dialog.text_1}
					</p>
				</div>

				<div className="flex justify-center h-5/6">
					<div className="m-2 p-2 w-10/12 gap-12 text-sky-900 dark:text-sky-200">
						<form className="flex flex-col gap-3" onSubmit={sendEmail}>
							<div className="flex flex-row max-laptop:flex-col gap-4 justify-start items-center">
								<label
									className="text-xl max-tablet:text-base text-center font-bold"
									htmlFor="email"
								>
									{dialog.type_email}
								</label>
								<input
									className="my-2 p-2 w-6/12 text-center max-tablet:text-xs max-laptop:w-full h-8 rounded-md bg-sky-300 dark:bg-slate-950 border border-slate-700 dark:border-slate-300"
									type="text"
									name="email"
									value={emailValue}
									onChange={handleEmailInput}
								/>
							</div>

							<label
								className="mt-8 text-xl max-tablet:text-base text-center font-bold"
								htmlFor="message"
							>
								{dialog.write_message}
							</label>
							<textarea
								className="p-2 resize-none h-[32vh] max-tablet:text-xs rounded-md bg-sky-300 dark:bg-slate-950 border border-slate-700 dark:border-slate-300"
								name="message"
								value={contentFormValue}
								onChange={handleContentFormInput}
							/>
							<div className="flex justify-center">
								<button
									className="cursor-pointer text-2xl max-tablet:text-lg p-2 border border-slate-700 dark:border-slate-300 hover:scale-105 transition-all duration-300 bg-sky-300 hover:bg-sky-400 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-md shadow-lg"
									type="submit"
								>
									{dialog.send}
								</button>
							</div>
						</form>
					</div>
				</div>

				{shouldBackdropshow && (
					<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
						<LoaderCircle className="h-8 w-8 animate-spin text-white" />
					</div>
				)}
			</DialogContent>
		</Dialog>
	);
};
