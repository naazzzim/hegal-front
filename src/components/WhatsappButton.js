import Image from "next/image"
import styles from '@/styles/Home2.module.css'

const WhatsappButton = () => {
  return (
    <div    className={styles.whatsapp}>
        {/* <p>WhatsApp Us!&nbsp;&nbsp;</p>  */}
        <Image src={'/icons/whatsapp.svg'} width={36} height={36} />
    </div>
  )
}

export default WhatsappButton