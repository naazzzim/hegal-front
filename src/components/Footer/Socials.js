import Link from "next/link"
import styles from "@/styles/Footer.module.css"


const Socials = ({data}) => {
  return (
    <div    className={styles.socials}>
        <h2>{data.title}</h2>
        <hr />
        <h3>{data.mail}</h3>
        <hr />
        <Link   href={`tel:${data.phone}`}><h3>{data.phone}</h3></Link>
        <hr />
        <Link target="_blank"  href={data.linkedIn}><h3>LinkedIn</h3></Link>
        <hr />
        <Link target="_blank"  href={data.instagram}><h3>Instagram</h3></Link>
        <hr />
        <Link target="_blank"  href={data.twitter}><h3>twitter</h3></Link>
        <hr />

    </div>
  )
}

export default Socials