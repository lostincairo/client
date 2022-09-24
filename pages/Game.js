import { useCallback, useEffect, useState} from "react";
import dynamic from "next/dynamic";

const Phaser = dynamic(
    () => import('phaser'),
    { ssr: false },
)

const GridEngine = dynamic(
    () => import('grid-engine'),
    { ssr: false },
)

export default function Game() {

    const phaserGame = new Phaser.Game({
        type: Phaser.AUTO,
        title: 'Lost in Cairo',
        parent: 'game-content',
        localStorageName: 'Lost in Cairo',
        autoRound: true,
        pixelArt: true,
        scene: [
            BootScene,
            LoadAssetsScene,
            GameScene,
            MainMenuScene,
        ],
        physics: {
            default: 'arcade',
        },
        plugins: {
            scene: [
                {
                    key: 'gridEngine',
                    plugin: GridEngine,
                    mapping: 'gridEngine',
                },
            ],
        },
        backgroundColor: '#000000',
    })


    return (
        <div>Hey</div>
    )
}