import Image from "next/image"
import styles from '@/styles/Home2.module.css'
import FlatButton from "../FlatButton"
import Link from "next/link"
import {useSelector} from "react-redux";

const Hero = ({data}) => {
    const languageData = useSelector(state => state.language);

    return (
        <section className={styles.heroContainer} id="about">
            <Image src="/illustrations/Company-amico.svg" alt="help business" width={600} height={600}/>
            <div className={styles.heroText}>
                <h1 className={styles.heroTitle}>{data.title}</h1>
                <p className={styles.heroDescription}>{data.description}</p>
                <Link href={`/about?language=${languageData.language}`}>
                    <FlatButton text={data.buttonText}/>
                </Link>
            </div>
        </section>
    )
}

export default Hero