import { useIntlayer } from "react-intlayer";

export const Footer = () => {
	const { footer } = useIntlayer("footer");

	return (
		<footer className="p-2 flex justify-center items-center w-full max-laptop:text-sm min-h-14 bg-sky-900 dark:bg-slate-950 text-yellow-200 text-center shadow-xl">
			<p>
				{footer} <strong>JeffsHenrique</strong>
			</p>
		</footer>
	);
};
