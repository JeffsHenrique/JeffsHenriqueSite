import memoryCowSvg from '@/app/assets/cowPixelArt.gif'
import noughtsAndCrosses from '@/app/assets/noughtsAndCrosses.gif'
import drawingBoard from '@/app/assets/drawingBoard.gif'

import type { Game } from '../types/Game'

class GameData {
    getGames(): Promise<Game[]> {
        const currentLang = localStorage.getItem('LangContextKey')

        const game: Game[] = [
            {
                title: `${currentLang === 'us-en' ? `Sum 2048` : 'Soma 2048'}`,
                source: 'https://2048-v4.h5games.usercontent.goog/v/4fe9a293-323e-4486-8aef-839ab3806c29/?origin=https%3A%2F%2Fgamesnacks.com&amp;gameCenterId=gamesnacks&amp;userActivityMetrics=true&amp;eids=97564784&amp;features=GamesnacksIdentity__monetization%2CInterstitialFreqCap__freq_cap_60s%2CInterstitialFreqCap__block_pga_1m_interstitials#pc=3657638229117998&amp;preStart=1717702139293&audioMuted=true',
                img: 'https://2048-v4.h5games.usercontent.goog/v/4fe9a293-323e-4486-8aef-839ab3806c29/high_res_icon.jpg=w128',
                developedBy: 'internet',
            },
            /* --> Billiards <--
            {
                title: 'Billiards Classic',
                source: 'https://billiardsclassic.h5games.usercontent.goog/v/dd1f188f-cef2-4a0f-bfb0-a58e0bb3c16e/?origin=https%3A%2F%2Fgamesnacks.com&amp;gameCenterId=gamesnacks&amp;userActivityMetrics=true&amp;eids=97564784&amp;features=GamesnacksIdentity__monetization%2CInterstitialFreqCap__freq_cap_60s%2CInterstitialFreqCap__block_pga_1m_interstitials#pc=1017404162534837&amp;preStart=1717706138805&audioMuted=true',
                img: 'https://billiardsclassic.h5games.usercontent.goog/v/dd1f188f-cef2-4a0f-bfb0-a58e0bb3c16e/high_res_icon.jpg=w128',
                developedBy: 'internet',
            },
            */
            {
                title: 'Memory Cow Game',
                source: 'https://memory-cow-game.vercel.app/',
                img: memoryCowSvg.src,
                developedBy: 'jeffs',
            },
            {
                title: `${currentLang === 'us-en' ? `Chess Classic` : 'Xadrez Clássico'}`,
                source: 'https://chessclassic.h5games.usercontent.goog/v/d94ef861-2fc9-4c60-b983-962237f8f981/?origin=https%3A%2F%2Fgamesnacks.com&gameCenterId=gamesnacks&userActivityMetrics=true&eids=97564784&features=GamesnacksIdentity__monetization%2CInterstitialFreqCap__freq_cap_60s%2CInterstitialFreqCap__block_pga_1m_interstitials#pc=2019361606459184&preStart=1717709448763&audioMuted=true',
                img: 'https://chessclassic.h5games.usercontent.goog/v/d94ef861-2fc9-4c60-b983-962237f8f981/high_res_icon.jpg=w128',
                developedBy: 'internet',
            },
            {
                title: `${currentLang === 'us-en' ? `Mahjong Classic` : 'Mahjong Clássico'}`,
                source: 'https://mahjongclassic.h5games.usercontent.goog/v/390ce075-68ea-41ab-b192-b120b5647b61/?origin=https%3A%2F%2Fgamesnacks.com&gameCenterId=gamesnacks&userActivityMetrics=true&eids=97564784&features=GamesnacksIdentity__monetization%2CInterstitialFreqCap__freq_cap_60s%2CInterstitialFreqCap__block_pga_1m_interstitials#pc=4435990931957769&preStart=1717718063678&audioMuted=true',
                img: 'https://mahjongclassic.h5games.usercontent.goog/v/390ce075-68ea-41ab-b192-b120b5647b61/high_res_icon.jpg=w128',
                developedBy: 'internet',
            },
            /* --> Freekick Football <--
            {
                title: 'Freekick Football',
                source: 'https://freekickfootball.h5games.usercontent.goog/v/0lqeu7698mvk0/?origin=https%3A%2F%2Fgamesnacks.com&gameCenterId=gamesnacks&userActivityMetrics=true&eids=95329199%2C97564783&features=InterstitialFreqCap__freq_cap_60s%2CInterstitialFreqCap__block_pga_1m_interstitials#pc=154131196132985&preStart=1717718525316&audioMuted=true',
                img: 'https://freekickfootball.h5games.usercontent.goog/v/0lqeu7698mvk0/images/icon256.png=w128',
                developedBy: 'internet',
            },
            */
            {
                title: `${currentLang === 'us-en' ? `Minesweeper` : 'Campo Minado'}`,
                source: 'https://minesweeper.h5games.usercontent.goog/v/dcbb3935-c18b-4bd2-ad64-82f697697694/?origin=https%3A%2F%2Fgamesnacks.com&gameCenterId=gamesnacks&userActivityMetrics=true&eids=95329199%2C97564783&features=InterstitialFreqCap__freq_cap_60s%2CInterstitialFreqCap__block_pga_1m_interstitials#pc=2990911982248138&preStart=1717718664193&audioMuted=true',
                img: 'https://minesweeper.h5games.usercontent.goog/v/dcbb3935-c18b-4bd2-ad64-82f697697694/high_res_icon.jpg=w128',
                developedBy: 'internet',
            },
            {
                title: `${currentLang === 'us-en' ? `Noughts And Crosses` : 'Jogo da Velha'}`,
                source: 'https://jeffshenrique.github.io/jogo-da-velha/',
                img: noughtsAndCrosses.src,
                developedBy: 'jeffs',
            },
            {
                title: `${currentLang === 'us-en' ? `Drawing Board` : 'Paint'}`,
                source: 'https://jeffshenrique.github.io/quadro-de-desenho/',
                img: drawingBoard.src,
                developedBy: 'jeffs',
            },
            {
                title: `${currentLang === 'us-en' ? `Daily sudoku` : 'Sudoku'}`,
                source: 'https://4j6utu2p6fklg.h5games.usercontent.goog/v/6qh61gl4k3ado/?origin=https%3A%2F%2Fgamesnacks.com&gameCenterId=gamesnacks&userActivityMetrics=true&eids=97564783&features=InterstitialFreqCap__freq_cap_60s%2CInterstitialFreqCap__block_pga_1m_interstitials#pc=2324757848784090&preStart=1717887031142&audioMuted=true',
                img: 'https://4j6utu2p6fklg.h5games.usercontent.goog/v/6qh61gl4k3ado/dailysudoku-app-icon-medium.png=w128',
                developedBy: 'internet',
            },
            {
                title: 'Parking Rush',
                source: 'https://7nq79vktk8fho.h5games.usercontent.goog/v/4u3a6m3hm9lj8/?origin=https%3A%2F%2Fgamesnacks.com&gameCenterId=gamesnacks&userActivityMetrics=true&eids=95329199%2C97564783&features=InterstitialFreqCap__freq_cap_60s%2CInterstitialFreqCap__block_pga_1m_interstitials#pc=3880799723391288&preStart=1717887588281&audioMuted=true',
                img: 'https://7nq79vktk8fho.h5games.usercontent.goog/v/4u3a6m3hm9lj8/html5games/assets/marketingAssets/gameIcons/256x256.png=w128',
                developedBy: 'internet',
            },
        ]

        return Promise.resolve(game)
    }
}

export const gameData = new GameData()