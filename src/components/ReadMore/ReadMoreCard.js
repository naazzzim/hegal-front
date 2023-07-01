import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

const ReadMoreCard = ({item}) => {
    return (
        <div className={styles.ReadMoreCard}>
            <h3><span> <Image src={item.icon} alt='icon' height={32} width={32}/> </span>{item.title}</h3>
            <p>{item.description}</p>
            <Link href="#">Read More &nbsp;<Image src={'/icons/right.svg'} alt='hi' height={24} width={24}/></Link>
        </div>
    )
}

export default ReadMoreCard