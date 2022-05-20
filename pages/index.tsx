import { useEffect, useState } from 'react'
import KeyPad from '../components/KeyPad'
import RemainingScore from '../components/RemainingScore'
import RoundScore from '../components/RoundScore'
import styles from '../styles/Home.module.scss'

export default function Home() {
  const [roundScore, setRoundScore] = useState<number | undefined>(undefined)
  const [dartCount, setDartCount] = useState<number>(0)
  const [keyPadDisabled, setKeyPadDisabled] = useState<boolean>(false)

  const setDartScore = (score: number) => {
    if (!roundScore) {
      setRoundScore(score)
    } else {
      setRoundScore(roundScore + score)
    }

    setDartCount(dartCount + 1)
  }

  useEffect(() => {
    if (dartCount === 3) {
      setKeyPadDisabled(true)
      setDartCount(0)
    }
  }, [dartCount])

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <RemainingScore />
        <RoundScore score={roundScore && roundScore} />
        <KeyPad setDartScore={setDartScore} disabled={keyPadDisabled} />
      </main>
    </div>
  )
}
