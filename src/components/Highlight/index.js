import styles from '@/styles/Home2.module.css'
import HighlightCard from './HighlightCard'
import Image from 'next/image'

const Highlight = ({data}) => {
  return (
    <section    className={styles.highlightContainer}>
        <section>
            <article>
                <h2>{data.title}</h2>        
                <p>{data.description}</p>
            </article>
            {/* <div> */}
                <Image className={styles.img} src="/illustrations/Helping a partner-rafiki.svg" width={700} height={700} alt={'help business'} />
            {/* </div> */}
        </section>

        <section    className={styles.HighlightCardsContainer}>
            {data.items.map(x=> <HighlightCard item={x} /> )}
        </section>
    </section>
  )
}

export default Highlight