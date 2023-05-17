import styles from '@/styles/FlatButton.module.css'

const FlatButton = ({text}) => {
  return (
    <button  className={styles.flatButton}>{text}</button>
  )
}

export default FlatButton