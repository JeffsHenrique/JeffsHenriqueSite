import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";

export interface PhotoProps {
	open: boolean;
	onClose: () => void;
	source: string;
}

export const PhotoDialog = (props: PhotoProps) => {
	const { open, onClose, source } = props;

	return (
		<Dialog open={open} onOpenChange={onClose}>
			<DialogContent
				className="text-center overflow-auto max-h-[90dvh] min-w-[60dvw] max-laptop:w-full border-2 rounded-md border-slate-700 dark:border-slate-300 bg-sky-200 dark:bg-slate-900"
				showCloseButton={false}
			>
				<DialogTitle>
					<p className="text-sky-900 dark:text-sky-200 font-bold">Imagem</p>
				</DialogTitle>

				<div className="flex justify-center">
					<Image
						alt={`Imagem de ${source}`}
						quality={100}
						width={0}
						height={0}
						className="min-w-[40vw] rounded-lg"
						src={source}
						unoptimized
					/>
				</div>
			</DialogContent>
		</Dialog>
	);
};
