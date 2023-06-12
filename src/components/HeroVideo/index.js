import styles from '@/styles/Home2.module.css'
import FlatButton from '../FlatButton'
import Link from 'next/link'


const index = ({data}) => {
  return (
    <div    className={styles.videoHero}>
        <video  autoPlay loop muted width={1920} >
            <source src="/videos/hero.mp4"/>
        </video>
        <div className={styles.videoAfter}>
          <h1>{data.title}</h1>
          <h2>{data.subTitle}</h2>
          <div className={styles.buttonContainer}>
            <Link href={'#services'}><FlatButton text={'Explore Our Services'} /></Link>
            <Link href={'#contact-us'}><FlatButton text={'Start My Business'}/></Link>
          </div>
        </div>
    </div>
  )
}

export default index