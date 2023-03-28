import { ChallengesContext } from "@/contexts/ChallengesContext";
import { CountdownContext } from "@/contexts/CountdownContext";
import { useContext, useEffect, useState } from "react"
import style from "../styles/components/Countdown.module.css"



export function Countdown() {

    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        resetCountdown,
        startCountdown
    } = useContext(CountdownContext)

    const [minutesLeft, minutesRight] = String(minutes).padStart(2, "0").split("");
    const [secondsLeft, secondsRight] = String(seconds).padStart(2, "0").split("");

    return (
        <div>
            <div className={style.countdown}>
                <div>
                    <span>{minutesLeft}</span>
                    <span>{minutesRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondsLeft}</span>
                    <span>{secondsRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button
                    disabled
                    className={style.CountdownButton}
                >
                    Ciclo encerrado

                </button>) :
                (
                    <>
                        {isActive ? (
                            <button
                                type="button"
                                className={`${style.CountdownButton} ${style.CountdownButtonActive}`}
                                onClick={resetCountdown}
                            >
                                Abandonar Ciclo

                            </button>
                        ) : (
                            <button
                                type="button"
                                className={style.CountdownButton}
                                onClick={startCountdown}
                            >
                                Iniciar um ciclo

                            </button>)
                        }
                    </>
                )
            }
        </div>
    )
}