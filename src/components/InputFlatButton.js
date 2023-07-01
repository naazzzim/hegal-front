import styles from '@/styles/FlatButton.module.css'

const InputFlatButton = ({disabled, text}) => {
    return (
        <input disabled={disabled} style={{width: '100%'}} type="submit" value={text} className={styles.flatButton}/>
    )
}

export default InputFlatButton