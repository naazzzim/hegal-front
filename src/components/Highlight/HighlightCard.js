import styles from '@/styles/Home2.module.css'
import Image from 'next/image'
import Link from 'next/link'
import OutlineButton from '../OutlineButton'


const HighlightCard = ({item}) => {
    const slug  = item.title.split(' ').join('-').toLowerCase().replace('&-','')
    // .split(' ').slice(0,45).join(' ')
  return (
    <div    className={styles.highlightCardContainer}>
        <Image src={item.icon} width={255} height={130} alt={'icon'}/>
        <Link href={`/services/${slug}`}><h3>{item.title}</h3></Link>
        {/* <p>{desc}</p> */}
        {/* <h4> <Image className={styles.hicon} src={'/icons/h41.svg'}  width={30}  height={30} alt='list-icon'/> Offered Services</h4> */}
        {/* <ul>
          {
            item.list.map(
              x=> <li>{x}</li>
            )
          }
        </ul> */}
        <p>
          {item.description} <Link href={`/services/${slug}`}><span className={styles.link}>Read more <Image className={styles.harrow} width={18} height={18} src={'/icons/right2.svg'}/> </span></Link>
        </p>
        <Link href={'#contact-us'}>
          <OutlineButton className={styles.bookButton} text={'Book Service'}/>
        </Link>
    </div>
  )
}

export default HighlightCard