import { useEffect, useState } from 'react'
import styles from '../styles/KeyPad.module.scss'
const keys = Array.from(new Array(20).fill(null))

interface IKeyPadProps {
    setDartScore: (score: number) => void
    disabled: boolean
}

const KeyPad = ({ setDartScore, disabled } : IKeyPadProps) => {
    const [modifier, setModifier] = useState<number>(1)
    const [prefix, setPrefix] = useState('')

    const updateModifier = (newModifier: number) => {
        if (newModifier === modifier) {
            setModifier(1)
        } else {
            setModifier(newModifier)
        }
    }

    useEffect(() => {
        switch (modifier) {
            case 1:
                setPrefix('')
                break
            case 2:
                setPrefix('D')
                break
            case 3:
                setPrefix('T')
                break
        }
    }, [modifier])

    const submitScore = (number:number) => {
        setDartScore(modifier*number)
        setModifier(1)
    }

    return (
        <div className={styles.keypad}>
            {keys.map((k, idx) => (
                <button className={styles.key} disabled={disabled} onClick={() => submitScore(idx + 1)}>
                    <span>{prefix}</span>
                    <span>{idx + 1}</span>
                </button>
            ))}
            <button className={styles.key} disabled={disabled} onClick={() => submitScore(25)}>{prefix ? '50' : '25'}</button>
            <button className={styles.key} disabled={disabled} onClick={() => submitScore(0)}>Miss</button>
            <button className={styles.key} disabled={disabled} onClick={() => updateModifier(2)}>Double</button>
            <button className={styles.key} disabled={disabled} onClick={() => updateModifier(3)}>Treble</button>
        </div>
    )
}

export default KeyPad