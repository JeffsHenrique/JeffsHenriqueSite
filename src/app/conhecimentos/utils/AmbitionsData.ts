import angularIcon from "../assets/angular.png";
import nestJSIcon from "../assets/nestjs.png";
import phpIcon from "../assets/phpicon.png";
import type { Ambition } from "../types/Ambition";

export const useAmbitionsService = () => {
	const getAmbitions = (): Promise<Ambition[]> => {
		const ambitions: Ambition[] = [
			{
				name: "Angular",
				image: angularIcon.src,
			},
			{
				name: "NestJS",
				image: nestJSIcon.src,
			},
			{
				name: "PHP",
				image: phpIcon.src,
			},
		];

		return Promise.resolve(ambitions);
	}

	return { getAmbitions };
}