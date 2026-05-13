"use client";

import brazilFlag from "@/app/assets/Flag_of_Brazil.png";
import unitedStatesFlag from "@/app/assets/Flag_of_USA.png";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import Image from "next/image";
import { useLang } from "../contexts/LanguageContext";

const LanguageSwitch = () => {
	const langCtx = useLang();

	const handleBRLang = () => {
		if (langCtx) {
			langCtx.setLang("pt-br");
			location.reload();
		}
	};

	const handleENLang = () => {
		if (langCtx) {
			langCtx.setLang("us-en");
			location.reload();
		}
	};

	return (
		<div className="flex flex-row mr-4">
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Globe size={20} className="size-8 cursor-pointer" />
				</DropdownMenuTrigger>

				<DropdownMenuContent
					align="center"
					className="rounded-md bg-accent dark:bg-accent-foreground grid gap-2"
				>
					<DropdownMenuItem
						onClick={handleBRLang}
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
						onClick={handleENLang}
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
			</DropdownMenu>
		</div>
	);
};

export default LanguageSwitch;
