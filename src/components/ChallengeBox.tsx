import { ChallengesContext } from "@/contexts/ChallengesContext";
import { CountdownContext } from "@/contexts/CountdownContext";
import { useContext } from "react";
import style from "../styles/components/ChallengeBox.module.css"

export function ChallengeBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext)

    function handleChallengeSucceeded() {
        completeChallenge();
        resetCountdown();
    }
    function handleChallengeFailed() {
        resetChallenge();
        resetCountdown();
    }

    return (
        <div className={style.ChallengeBoxContainer}>
            {activeChallenge.amount != null ? (
                <div className={style.ChallengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>
                    <main>
                        <img src="https://img.freepik.com/vetores-premium/homem-bonito-levantando-haltere-fitness-gym-cartoon-vector-icon-ilustracao-icone-de-esporte-de-pessoas-isolado_138676-5450.jpg?size=338&ext=jpg&ga=GA1.1.903080617.1679520035&semt=ais" />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                        <footer>
                            <button
                                type="button"
                                className={style.challengeFailedButton}
                                onClick={handleChallengeFailed}
                            >
                                Falhei
                            </button>
                            <button
                                type="button"
                                className={style.challengeSucceededButton}
                                onClick={handleChallengeSucceeded}
                            >
                                Completei
                            </button>
                        </footer>
                    </main>
                </div>
            ) : (
                <div className={style.ChallengeNotActive}>
                    <strong>Finalize um ciclo para receber desafio</strong>
                    <p>
                        <img src="https://img.freepik.com/free-icon/promotion_318-713332.jpg?size=338&ext=jpg&ga=GA1.2.903080617.1679520035&semt=ais" alt="" />
                        Avance de level completando os desafios
                    </p>
                </div>
            )}
        </div>
    )
} 
