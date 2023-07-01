import styles from '@/styles/Home2.module.css'
import HighlightCard from './HighlightCard'
import Image from 'next/image'

const Highlight = ({data}) => {
    return (
        <section className={styles.highlightContainer} id='services'>
            <section className={styles.highlightText}>
                <article>
                    <h2>{data.title}</h2>
                    <p>{data.description}</p>
                </article>
                <Image className={styles.img} src="/illustrations/Helping a partner-amico(1).svg" width={600}
                       height={600} alt={'help business'}/>
            </section>

            <section className={styles.HighlightCardsContainer}>
                {data.items.map(x => <HighlightCard item={x}/>)}
            </section>
        </section>
    )
}

export default Highlight