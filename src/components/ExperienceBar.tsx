import { ChallengesContext } from '@/contexts/ChallengesContext';
import { useContext } from 'react';
import style from '../styles/components/ExperienceBar.module.css'



export function ExperienceBar() {
    const { currentExperince, experienceToNextLevel } = useContext(ChallengesContext)

    const percentToNextLevel = Math.round((currentExperince * 100)) / experienceToNextLevel;

    return (
        <header className={style.expirenceBar}>
            <span>0xp</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }}></div>
                <span className={style.currentExperience} style={{ left: `${percentToNextLevel}%` }}>
                    {currentExperince}xp
                </span>
            </div>
            <span>{experienceToNextLevel}xp</span>
        </header>
    );
}