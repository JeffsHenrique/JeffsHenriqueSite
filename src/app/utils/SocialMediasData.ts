import type { SocialMedia } from "../types/SocialMedia";
import catTest from '@/app/images/cat.png'
import githubIcon from '@/app/assets/githubicon.png'
import linkedinIcon from '@/app/assets/linkedinicon.png'
import instagramIcon from '@/app/assets/instagramicon.png'

class SocialMediasData {
    getSocialMedias(): Promise<SocialMedia[]> {
        const socialMedias: SocialMedia[] = [
            {
                name: 'GitHub',
                image: githubIcon.src,
                href: 'https://github.com/JeffsHenrique'
            },
            {
                name: 'LinkedIn',
                image: linkedinIcon.src,
                href: 'https://www.linkedin.com/in/jeffersonalmeida/'
            },
            {
                name: 'Instagram',
                image: instagramIcon.src,
                href: 'https://www.instagram.com/jeffshenrique_dev/'
            },
        ]

        return Promise.resolve(socialMedias)
    }
}

export const socialMediasData = new SocialMediasData()