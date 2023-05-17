import styles from "@/styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

const Contacts = ({contactData}) => {
  return (
    <div className={styles.contacts}>
        <div className={styles.contactsLeft}>
          <div><Image src={'/icons/location.svg'} alt="Location" height={15} width={15}/>&nbsp;{contactData.place}</div>
          <div><Image src={'/icons/phone.svg'} alt="Phone" height={15} width={15}/>&nbsp;{contactData.phone}</div>
          <div><Image src={'/icons/mail.svg'} alt="Mail" height={15} width={15}/>&nbsp;{contactData.mail}</div>
        </div>
        <div className={styles.contactsRight}>
          <div className={styles.socials}><Link href="#"><Image src={'/icons/facebook.svg'} alt="facebook" height={25} width={25} /></Link></div>
          <div className={styles.socials}><Link href="#"><Image src={'/icons/twitter.svg'} alt="twitter" height={25} width={25} /></Link></div>
          <div className={styles.socials}><Link href="#"><Image src={'/icons/instagram.svg'} alt="instagram" height={25} width={25} /></Link></div>
          <div className={styles.socials}><Link href="#"><Image src={'/icons/linkedin.svg'} alt="linkedin" height={25} width={25} /></Link></div>
        </div>
      </div>
  )
}

export default Contacts