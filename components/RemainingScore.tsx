import styles from '../styles/RemainingScore.module.scss'

interface IRemainingScoreProps {
    remainingScore: number
}

const RemainingScore = ({ remainingScore } : IRemainingScoreProps) => {
    return (
        <div className={styles.score}>
            <h2>{ remainingScore }</h2>
        </div>
    )
}

export default RemainingScore