import styles from '@/styles/Home2.module.css'
import FlatButton from '../FlatButton'
import Link from 'next/link'
import {useSelector} from "react-redux";

const index = ({data}) => {

    const languageData = useSelector(state => state.language);

    return (
        <div className={styles.videoHero}>
            <video autoPlay loop muted width={1920}>
                <source src="/videos/hero.mp4"/>
            </video>
            <div className={styles.videoAfter}>
                <h1>{data.title}</h1>
                <h2>{data.subTitle}</h2>
                <div className={styles.buttonContainer}>
                    <Link href={'#services'}><FlatButton text={languageData.HeroVideo.leftButton}/></Link>
                    <Link href={'#contact-us'}><FlatButton text={languageData.HeroVideo.rightButton}/></Link>
                </div>
            </div>
        </div>
    )
}

export default index