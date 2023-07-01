import styles from '@/styles/Footer.module.css'
import Image from 'next/image'
import Links from './Links'
import Socials from './Socials'
import {useSelector} from "react-redux";

const Footer = () => {

    const languageData = useSelector(state => state.language);

    return (
        <div className={styles.footer}>
            <div className={styles.logo}>
                <Image src={'/hegal.png'} alt='hegal group' width={300} height={300}/>
                <h3>{languageData.logoData.name}<br/>{languageData.logoData.address1}
                    <br/>{languageData.logoData.address2} </h3>
            </div>
            <div>
                {
                    languageData.quickLinks.map(x =>
                        <Links item={x}/>
                    )
                }
            </div>
            <div>
                <Socials data={languageData.contactData}/>
            </div>
        </div>
    )
}

export default Footer