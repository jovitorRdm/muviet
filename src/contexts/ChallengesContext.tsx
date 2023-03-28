import { createContext, useEffect, useState } from "react";
import Cookies from 'js-cookie'
import challenges from '../../challenges.json'

interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengesContextData {
    level: number;
    currentExperince: number;
    challengesComplited: number;
    activeChallenge: Challenge;
    experienceToNextLevel: number;
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
    completeChallenge: () => void;
}

interface ChallengeProviderProps {
    children: React.ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengeProviderProps) {
    const [level, setLevel] = useState(1);
    const [currentExperince, setCurrentExpirence] = useState(0);
    const [challengesComplited, setChallengesComplited] = useState(0);

    const [activeChallenge, setActiveChallenge] = useState<Challenge>({} as Challenge)

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    useEffect(() => {
        Notification.requestPermission();
    }, [])

    useEffect(() => {
        Cookies.set("Level", String(level));
        Cookies.set("currentExperince", String(currentExperince));
        Cookies.set("challengesComplited", String(challengesComplited));
    }, [level, currentExperince, challengesComplited])

    function levelUp() {
        setLevel(level + 1);
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge as Challenge);

        if (Notification.permission == 'granted') {
            new Notification('Novo desafio 🥳', {
                body: `Valendo ${challenge.amount} xp!`
            })
        }
    }

    function resetChallenge() {
        setActiveChallenge({} as Challenge)
    }

    function completeChallenge() {
        if (!activeChallenge) {
            return;
        }

        const { amount } = activeChallenge;

        let finalExperience = currentExperince + amount;

        if (finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }

        setCurrentExpirence(finalExperience);
        setActiveChallenge({} as Challenge);
        setChallengesComplited(challengesComplited + 1);
    }

    return (
        <ChallengesContext.Provider
            value={{
                level,
                currentExperince,
                challengesComplited,
                activeChallenge,
                experienceToNextLevel,
                levelUp,
                startNewChallenge,
                resetChallenge,
                completeChallenge
            }}>
            {children}
        </ChallengesContext.Provider>
    )
}

