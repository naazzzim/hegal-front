import styles from '@/styles/Home2.module.css'
import Image from 'next/image'
import Link from 'next/link'
import OutlineButton from '../OutlineButton'


const HighlightCard = ({item}) => {
    const   desc    =   item.description.split(' ').slice(0,18).join(' ')
  return (
    <div    className={styles.highlightCardContainer}>
        <Image src={item.icon} width={255} height={130} alt={'icon'}/>
        <h3>{item.title}</h3>
        <p>{desc}...</p>
        <Link href={'#'}>Read More</Link>
        <OutlineButton className={styles.bookButton} text={'Book Service'}/>
    </div>
  )
}

export default HighlightCard