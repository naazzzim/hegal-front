import styles from '@/styles/FlatButton.module.css'

const OutlineButton = ({text}) => {
  return (
    <div    className={`${styles.outlineButton} ${styles.bookButton}`}>{text}</div>
  )
}

export default OutlineButton