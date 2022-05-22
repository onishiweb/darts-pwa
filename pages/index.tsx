import { useEffect, useState } from 'react'
import KeyPad from '../components/KeyPad'
import RemainingScore from '../components/RemainingScore'
import RoundScore from '../components/RoundScore'
import styles from '../styles/Home.module.scss'

export default function Home() {
  const [roundScore, setRoundScore] = useState<number>(0)
  const [dartCount, setDartCount] = useState<number>(0)
  const [roundComplete, setRoundComplete] = useState<boolean>(false)
  const [remainingScore, setRemainingScore] = useState<number>(501)

  const setDartScore = (score: number) => {
    setRoundScore(roundScore + score)
    setDartCount(dartCount + 1)
  }

  const submitRoundScore = () => {
    setRemainingScore(remainingScore - roundScore)
    setRoundScore(0)
    setRoundComplete(false)
  }

  useEffect(() => {
    if (dartCount === 3) {
      setRoundComplete(true)
      setDartCount(0)
    }
  }, [dartCount])

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <RemainingScore remainingScore={remainingScore} />
        <RoundScore score={roundScore && roundScore} submitRound={submitRoundScore} showSubmit={roundComplete} />
        <KeyPad setDartScore={setDartScore} disabled={roundComplete} />
      </main>
    </div>
  )
}
