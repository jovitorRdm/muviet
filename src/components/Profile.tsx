import { ChallengesContext } from '@/contexts/ChallengesContext'
import { useContext } from 'react'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://i.pinimg.com/236x/e8/2e/1b/e82e1bec44fedf64213c253504a96fae.jpg" alt="homem estudando" />
            <div>
                <strong>João Victor</strong>

                <p>
                    <img src="icons/icon.svg " alt="" />
                    Level {level}
                </p>
            </div>
        </div>
    )
}