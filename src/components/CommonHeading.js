import styles from '@/styles/Home.module.css'

const CommonHeading = ({text}) => {
    return (
        <h2 className={styles.CommonHeading}>{text}</h2>
    )
}

export default CommonHeading