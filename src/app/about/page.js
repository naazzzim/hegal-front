'use client'
import styles from '@/styles/About.module.css'
import Image from 'next/image'
import englishData from '@/lang/en/constant/en.json'
import russianData from '@/lang/ru/constant/ru.json'
import arabicData from '@/lang/ar/constant/ar.json'
import {useSelector} from "react-redux";

const about = () => {

    const language = useSelector(state => state.language.language);

    let content = null;
    if (language === 'English') {
        content = englishData;
    } else if (language === 'Russian') {
        content = russianData;
    } else if (language === 'Arabic') {
        content = arabicData;
    }

    return (<>
        {
            content &&
            <main className={styles.about}>
                <section>
                    <Image src={'/hegal-arabic.png'} height={600} width={600} alt='company'/>
                    <h1>{content.aboutContent.title}</h1>
                </section>
                {content.aboutContent.desc.map(para => (<>
                    <br/>
                    <p>{para}</p>
                </>))}
            </main>
        }
    </>)
}

export default about