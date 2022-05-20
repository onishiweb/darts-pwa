import styles from '../styles/RoundScore.module.scss'

interface IRoundScoreProps {
    score?: number
}

const RoundScore = ({ score } : IRoundScoreProps) => {
    return (
        <div className={styles.roundScore}>
            <input className={styles.roundInput} type="number" value={score} />
        </div>
    )
}

export default RoundScore