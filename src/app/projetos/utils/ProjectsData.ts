import type { Project } from "../types/Project";

// assets
import { useIntlayer } from "react-intlayer";
import jamilleSubs10 from "../assets/jamillesubs-10.png";
import jamilleSubs7 from "../assets/jamillesubs-7.png";
import jamilleSubs8 from "../assets/jamillesubs-8.png";
import jamilleSubs9 from "../assets/jamillesubs-9.png";
import mtsSensores1 from "../assets/mts-sensores-1.png";
import mtsSensores2 from "../assets/mts-sensores-2.png";
import mtsSensores3 from "../assets/mts-sensores-3.png";
import mtsSensores4 from "../assets/mts-sensores-4.png";
import mtsSensores5 from "../assets/mts-sensores-5.png";
import mtsSensoresCliente1 from "../assets/mts-sensores-cliente-1.png";
import mtsSensoresOld1 from "../assets/mts-sensores-old-1.png";

export const useProjectsService = () => {
	const { projects: projectsIntl } = useIntlayer("projects")

	const getProjects = (): Promise<Project[]> => {
		// const currentLang = localStorage.getItem("LangContextKey");

		const projects: Project[] = [
			// {
			// 	title: "Pokedex",
			// 	projectLevel: 1,
			// 	images: [pokedex1.src, pokedex2.src, pokedex3.src, pokedexGif1.src],
			// 	imageAlt: `${currentLang === "us-en" ? `Sequence of pictures of my Pokedex project` : "Sequência de fotos do meu projeto Pokedex"}`,
			// 	description: {
			// 		projectDetails: `${currentLang === "us-en" ? `This project was made following a youtube video. It was really special because I did it with little knowledge in JavaScript.` : "Esse projeto foi feito seguindo um vídeo do youtube. Foi muito especial, pois o realizei apenas com um breve conhecimento em JavaScript."}`,
			// 		techsUsed: `JavaScript, HTML ${currentLang === "us-en" ? `and` : "e"} CSS`,
			// 	},
			// 	externalLinks: {
			// 		projectLink: "https://jeffshenrique.github.io/pokedex/",
			// 		ref: {
			// 			name: "Como criar uma Pokedex com HTML, CSS e JavaScript | Projeto Completo",
			// 			link: "https://www.youtube.com/watch?v=SjtdH3dWLa8",
			// 		},
			// 	},
			// },
			// {
			// 	title: "Memory Cow Game",
			// 	projectLevel: 1,
			// 	images: [memoryCow1.src, memoryCow2.src],
			// 	imageAlt: `${currentLang === "us-en" ? `Sequence of pictures of my Memory Cow Game project` : "Sequência de fotos do meu projeto Jogo da Memória de Vaca"}`,
			// 	description: {
			// 		projectDetails: `${currentLang === "us-en" ? `This project was made from my React with TypeScript classes, taught by Bonieky. I changed the icons to give it my own aesthetic ^^` : "Esse projeto foi feito a partir das aulas de React com TypeScript do professor Bonieky. Alterei os ícones para deixá-los do meu jeito ^^"}`,
			// 		techsUsed: `TypeScript, HTML ${currentLang === "us-en" ? `and` : "e"} CSS`,
			// 	},
			// 	externalLinks: {
			// 		projectLink: "https://memory-cow-game.vercel.app/",
			// 		ref: {
			// 			name: "B7Web",
			// 			link: "https://lp.b7web.com.br/",
			// 		},
			// 	},
			// },
			{
				title: projectsIntl.jamille_subs.title,
				projectLevel: 4,
				images: [
					jamilleSubs10.src,
					jamilleSubs9.src,
					jamilleSubs7.src,
					jamilleSubs8.src,
				],
				imageAlt: projectsIntl.jamille_subs.image_alt,
				description: {
					projectDetails: projectsIntl.jamille_subs.description.project_details,
					techsUsed: projectsIntl.jamille_subs.description.techs_used,
				},
			},
			// {
			// 	title: "Mira - Website Portfolio",
			// 	projectLevel: 2,
			// 	images: [miraPortfolio2.src, miraPortfolio1.src, miraPortfolio3.src],
			// 	imageAlt: `${currentLang === "us-en" ? `Sequence of pictures of Mira's portfolio website` : "Sequência de fotos do site portfolio da Editora de Vídeos Mira Agda"}`,
			// 	description: {
			// 		projectDetails: `${currentLang === "us-en" ? `This site was developed to be an online portfolio of the professional, Mira Agda, skilled in post-production and VFX of audiovisual works. Considering her interests and ideas, we sketch how the site would look like and which ideas were essential to be in her site, such as an option for the user to choose the language: Portuguese or English.` : "Esse site foi criado com a finalidade de ser um portfolio online para a profissional Mira Agda, especializada em pós-produção de obras audiovisuais. Alinhando com os interesses dela, desenhamos o site como ficaria e quais ideias eram essenciais, como a opção do site português e inglês."}`,
			// 		techsUsed: `Next.js, React com TypeScript, Material UI ${currentLang === "us-en" ? `and` : "e"} TailwindCss`,
			// 	},
			// 	externalLinks: {
			// 		projectLink: "https://miracampos.vercel.app/",
			// 	},
			// },
			{
				title: projectsIntl.dashboard_mts.title,
				projectLevel: 3,
				images: [
					mtsSensores1.src,
					mtsSensores2.src,
					mtsSensores3.src,
					mtsSensores4.src,
					mtsSensores5.src,
					mtsSensoresCliente1.src,
					mtsSensoresOld1.src,
				],
				imageAlt: projectsIntl.dashboard_mts.image_alt,
				description: {
					projectDetails: projectsIntl.dashboard_mts.description.project_details,
					techsUsed: projectsIntl.dashboard_mts.description.techs_used,
				},
				externalLinks: {
					videos: [
						"https://youtu.be/kL7pxFOT8CQ",
						"https://youtu.be/28XaJXH_HjQ",
					],
				},
			},
		];

		return Promise.resolve(projects);
	}

	return { getProjects }
}