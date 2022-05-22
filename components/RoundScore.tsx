import styles from '../styles/RoundScore.module.scss'

interface IRoundScoreProps {
    score?: number
    submitRound: VoidFunction
    showSubmit: boolean
}

const RoundScore = ({ score, submitRound, showSubmit } : IRoundScoreProps) => {
    return (
        <div className={styles.roundScore}>
            <input className={styles.roundInput} type="number" value={score} />
            {showSubmit && <button className={styles.roundSubmitButton} onClick={submitRound}>Submit</button>}
        </div>
    )
}

export default RoundScore