"use client";

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { useEffect, useRef } from "react";

export interface GameProps {
	open: boolean;
	onClose: () => void;
	title: string;
	source: string;
}

export const GameDialog = (props: GameProps) => {
	const { open, onClose, title, source } = props;
	const iframeRef = useRef<HTMLIFrameElement>(null);

	const handleClose = () => {
		onClose();
	};

	useEffect(() => {
		if (open && iframeRef.current) {
			iframeRef.current.focus();
		}
	}, [open]);

	return (
		<Dialog open={open} onOpenChange={(open) => !open && onClose()}>
			<DialogContent className="overflow-auto border-2 rounded-md border-slate-700 dark:border-slate-300 bg-sky-100 dark:bg-slate-900">
				<DialogHeader className="text-sky-900 dark:text-sky-200 my-4 flex justify-center">
					<DialogTitle className="text-2xl max-laptop:text-lg font-bold">
						{title}
					</DialogTitle>
				</DialogHeader>

				<DialogContent>
					<div className="flex justify-center items-center gap-12 text-sky-900 dark:text-sky-200">
						<div className="border-2 rounded-md border-slate-700 dark:border-slate-300 bg-slate-200 shadow-lg">
							<iframe
								ref={iframeRef}
								className="w-270 min-h-screen max-laptop:w-[80vw]"
								title={title}
								src={source}
								tabIndex={0}
								onLoad={() => iframeRef.current?.focus()}
							></iframe>
						</div>
					</div>
				</DialogContent>
			</DialogContent>
		</Dialog>
	);
};
