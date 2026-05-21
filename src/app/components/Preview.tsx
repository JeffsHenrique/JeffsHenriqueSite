import Link from "next/link";
import type React from "react";

interface PreviewProps {
	Section: React.ReactNode;
	sectionTitle: string;
	sectionSeeMore: string;
	sectionLink: string;
}

export function Preview({
	Section,
	sectionTitle,
	sectionSeeMore,
	sectionLink,
}: PreviewProps) {
	return (
		<div className="text-sky-900 dark:text-sky-200 mt-48">
			<div className="flex flex-col gap-8">
				<p className="font-bold text-5xl max-laptop:text-3xl text-center">
					{sectionTitle}
				</p>
				<div className="flex flex-col items-center gap-2">{Section}</div>
			</div>

			<div className="flex items-center justify-center mt-2">
				<Link href={sectionLink}>
					<div className="bg-purple-400 hover:bg-purple-500 w-full hover:scale-110 transition-all duration-200 dark:bg-purple-600 hover:dark:bg-purple-700 mx-4 mb-4 text-center p-2 rounded-md">
						{sectionSeeMore}
					</div>
				</Link>
			</div>
		</div>
	);
}
