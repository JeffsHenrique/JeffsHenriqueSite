"use client";

import brazilFlag from "@/app/assets/Flag_of_Brazil.png";
import unitedStatesFlag from "@/app/assets/Flag_of_USA.png";
import { Button } from "@/components/ui/button";

import { Locales } from "intlayer";
import Image from "next/image";
import { useLocale } from "react-intlayer";

const LanguageSwitch = () => {
	const { setLocale } = useLocale();

	return (
		<div className="flex flex-row mr-4">
			<Button
				onClick={() => setLocale(Locales.PORTUGUESE_BRAZIL)}
				className="cursor-pointer bg-transparent hover:scale-110 transition-all duration-200"
			>
				<Image
					width={32}
					height={0}
					className="border rounded-md border-sky-500"
					src={brazilFlag.src}
					alt="Bandeira do Brasil"
				/>
			</Button>
			<Button
				onClick={() => setLocale(Locales.ENGLISH)}
				className="cursor-pointer bg-transparent hover:scale-110 transition-all duration-200"
			>
				<Image
					width={32}
					height={0}
					className="border rounded-md border-sky-500"
					src={unitedStatesFlag.src}
					alt="USA Flag"
				/>
			</Button>
			{/* <DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Globe size={20} className="size-8 cursor-pointer" />
				</DropdownMenuTrigger>

				<DropdownMenuContent
					align="center"
					className="rounded-md bg-accent dark:bg-accent-foreground grid gap-2"
				>
					<DropdownMenuItem
						onClick={toggleLanguage}
						className="w-full flex justify-center items-center cursor-pointer hover:bg-sky-600 dark:hover:bg-sky-950"
					>
						<Image
							width={32}
							height={0}
							className="border rounded-md border-sky-500"
							src={brazilFlag.src}
							alt="Bandeira do Brasil"
						/>
					</DropdownMenuItem>
					<DropdownMenuItem
						onClick={toggleLanguage}
						className="w-full flex justify-center items-center cursor-pointer hover:bg-sky-600 dark:hover:bg-sky-950"
					>
						<Image
							width={32}
							height={0}
							className="border rounded-md border-sky-500"
							src={unitedStatesFlag.src}
							alt="USA Flag"
						/>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu> */}
		</div>
	);
};

export default LanguageSwitch;
