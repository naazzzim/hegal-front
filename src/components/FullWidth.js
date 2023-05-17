import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

const FullWidth = ({item}) => {
  return (
    <div    className={styles.fullWidth}>
        <h2>{item.title}</h2>
        <p>{item.msg}</p>
        <Link href={item.route}><button>{item.buttonText}</button></Link>
        <Image src={item.bg} alt='bg'   width={1920}    height={400}/>
    </div>
  )
}

export default FullWidth