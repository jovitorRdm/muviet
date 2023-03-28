import { ChallengesContext } from "../contexts/ChallengesContext"
import { useContext } from "react"
import style from "../styles/components/CompliteChallenges.module.css"

export function CompliteChallenges() {
    const { challengesComplited } = useContext(ChallengesContext)
    return (
        <div className={style.CompliteChallengesContainer}>
            <span>Desafios completos</span>
            <span>{challengesComplited}</span>
        </div>
    )
}