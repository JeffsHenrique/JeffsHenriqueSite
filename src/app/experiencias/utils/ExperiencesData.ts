import type { Experience } from "../types/Experience";

import { formatCurrentDate, formatPeriod } from "@/app/utils/DateFormatter";

// assets
import { useIntlayer } from "react-intlayer";
import esamcaudiovisual1 from "../assets/esamcaudiovisual-1.jpeg";
import esamcaudiovisual2 from "../assets/esamcaudiovisual-2.jpeg";
import esamcaudiovisual3 from "../assets/esamcaudiovisual-3.jpeg";
import esamcaudiovisual4 from "../assets/esamcaudiovisual-4.jpeg";
import esamcaudiovisual5 from "../assets/esamcaudiovisual-5.jpeg";
import esamcaudiovisual6 from "../assets/esamcaudiovisual-6.jpeg";
import esamcaudiovisual7 from "../assets/esamcaudiovisual-7.jpeg";
import etclegendas1 from "../assets/etclegendas-1.png";
import etclegendas2 from "../assets/etclegendas-2.png";
import showcaseanalista1 from "../assets/showcaseanalista-1.jpg";
import showcaseanalista2 from "../assets/showcaseanalista-2.jpg";
import showcaseanalista3 from "../assets/showcaseanalista-3.jpg";
import showcaseestagio1 from "../assets/showcaseestagio-1.jpg";
import showcaseestagio2 from "../assets/showcaseestagio-2.jpg";
import showcaseestagio3 from "../assets/showcaseestagio-3.jpg";

export const useExperiencesService = () => {
	const { experiences: experiencesIntl } = useIntlayer("experiences")

	const getExperiences = (): Promise<Experience[]> => {

		const experiences: Experience[] = [
			// WORK EXPERIENCES
			{
				period: {
					start: formatPeriod(1, 7, 2025),
					end: formatPeriod(20, 12, 2025),
				},
				professionalType: "work",
				positionName: experiencesIntl.work.emsa_com.position,
				companyName: "EMS-A.COM",
				mainRole: experiencesIntl.work.emsa_com.main_role,
				mainTools: "React Router, Firebase, Shadcn, BitBucket",
			},
			{
				period: {
					start: formatPeriod(5, 3, 2025),
					end: formatPeriod(10, 4, 2025),
				},
				professionalType: "work",
				positionName: experiencesIntl.work.prefeitura_campinas.position,
				companyName: "Prefeitura Municipal de Campinas",
				mainRole: experiencesIntl.work.prefeitura_campinas.main_role,
				mainTools: "Windows 10, Powershell, TeamViewer",
			},
			{
				period: {
					start: formatPeriod(1, 10, 2023),
					end: formatCurrentDate(),
				},
				professionalType: "work",
				isMyCurrentExperience: true,
				positionName: experiencesIntl.work.etc_filmes.position,
				companyName: "ETC Filmes",
				mainRole: experiencesIntl.work.etc_filmes.main_role,
				photos: [etclegendas1.src, etclegendas2.src],
				mainTools: "Subtitle Edit, JamilleSubs, Whisper",
			},
			{
				period: {
					start: formatPeriod(1, 2, 2023),
					end: formatPeriod(30, 8, 2023),
				},
				professionalType: "work",
				positionName: experiencesIntl.work.showcase_qa.position,
				companyName: "Showcase PRO",
				mainRole: experiencesIntl.work.showcase_qa.main_role,
				mainTools: "React, Node, Material UI, Docker, Whisper, Figma, GitLab",
			},
			{
				period: {
					start: formatPeriod(6, 1, 2020),
					end: formatPeriod(31, 1, 2023),
				},
				professionalType: "work",
				positionName: experiencesIntl.work.showcase_analyst.position,
				companyName: "Showcase PRO",
				mainRole: experiencesIntl.work.showcase_analyst.main_role,
				photos: [
					showcaseanalista1.src,
					showcaseanalista2.src,
					showcaseanalista3.src,
				],
				mainTools:
					"Google workspace (Sheets, Docs, Chat, Presentation, Meets), Premiere Pro, Whisper",
			},
			{
				period: {
					start: formatPeriod(17, 12, 2017),
					end: formatPeriod(31, 12, 2019),
				},
				professionalType: "work",
				positionName: experiencesIntl.work.showcase_intern.position,
				companyName: "Showcase PRO",
				mainRole: experiencesIntl.work.showcase_intern.main_role,
				photos: [
					showcaseestagio1.src,
					showcaseestagio2.src,
					showcaseestagio3.src,
				],
			},
			{
				period: {
					start: formatPeriod(15, 8, 2013),
					end: formatPeriod(15, 2, 2017),
				},
				professionalType: "work",
				positionName: experiencesIntl.work.icasa.position,
				companyName: "ICASA - Instituto Campineiro de análise de Solo e Adubo",
				mainRole: experiencesIntl.work.icasa.main_role,
				photos: [],
			},

			// STUDY EXPERIENCES
			{
				period: {
					start: formatPeriod(1, 2, 2017),
					end: formatPeriod(29, 6, 2020),
				},
				professionalType: "study",
				positionName: experiencesIntl.study.puc_campinas.position,
				companyName: "PUC Campinas",
				mainRole: experiencesIntl.study.puc_campinas.main_role,
			},
			{
				period: {
					start: formatPeriod(1, 8, 2023),
					end: formatPeriod(15, 3, 2024),
				},
				professionalType: "study",
				positionName: experiencesIntl.study.esamc.position,
				companyName: "ESAMC",
				mainRole: experiencesIntl.study.esamc.main_role,
				photos: [
					esamcaudiovisual1.src,
					esamcaudiovisual2.src,
					esamcaudiovisual3.src,
					esamcaudiovisual4.src,
					esamcaudiovisual5.src,
					esamcaudiovisual6.src,
					esamcaudiovisual7.src,
				],
			},
			{
				period: {
					start: formatPeriod(16, 3, 2024),
					end: formatCurrentDate(),
				},
				professionalType: "study",
				isMyCurrentExperience: true,
				positionName: experiencesIntl.study.fam.position,
				companyName: "Centro Universitário FAM",
				mainRole: experiencesIntl.study.fam.main_role,
			},
		];

		return Promise.resolve(experiences);
	}

	return { getExperiences };
}
