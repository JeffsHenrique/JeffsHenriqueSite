import { useTheme } from "@/app/contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";

export const ThemeSwitch = () => {
	const themeCtx = useTheme();

	const handleThemeToggle = () => {
		if (themeCtx) {
			themeCtx.setTheme(themeCtx.theme === "dark" ? "light" : "dark");
		}
	};

	return (
		<label className="mr-4 flex items-center cursor-pointer">
			{themeCtx?.theme === "light" && (
				<Sun width={32} className="text-yellow-300" />
			)}

			{themeCtx?.theme === "dark" && (
				<Moon width={32} className="text-yellow-200" />
			)}

			<input
				type="checkbox"
				className="opacity-0 w-0 h-0"
				onClick={handleThemeToggle}
			/>
		</label>
	);
};
