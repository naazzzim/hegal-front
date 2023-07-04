import Image from "next/image"
import styles from '@/styles/Home2.module.css'
import Link from "next/link"

const WhatsappButton = () => {
    return (
        <Link target="_blank" href={"https://wa.me/971503431265"} className={styles.whatsapp}>
            {/* <p>WhatsApp Us!&nbsp;&nbsp;</p>  */}
            <Image src={'/icons/whatsapp.svg'} width={24} height={24} alt="WhatsApp"/>
        </Link>
    )
}

export default WhatsappButton