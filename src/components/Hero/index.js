import Image from "next/image"
import styles from '@/styles/Home2.module.css'
import FlatButton from "../FlatButton"



const Hero = ({data}) => {
  return (
    <section className={styles.heroContainer}>
        <Image src="/illustrations/Business risk-amico.svg" alt="help business" width={600} height={600} />
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>{data.title}</h1>
          <p className={styles.heroDescription}>{data.description}</p>
          <FlatButton text={data.buttonText}/>
        </div>
    </section>
  )
}

export default Hero