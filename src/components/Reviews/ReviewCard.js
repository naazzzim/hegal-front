import styles from '@/styles/Home.module.css'
import Image from 'next/image'

const ReviewCard = ({item}) => {
    return (
        <div className={styles.reviewCard}>
            <p>
                <Image src={'/icons/quote.svg'} alt='quote' width={15} height={15}/>
                &nbsp;&nbsp;
                &nbsp;&nbsp;
                {item.review}
                &nbsp;&nbsp;
                &nbsp;&nbsp;
                <Image src={'/icons/quoteend.svg'} alt='quote' width={15} height={15}/>
            </p>
            <h4>
                {item.reviewer}
            </h4>
            <h5>
                {item.designation}
            </h5>
        </div>
    )
}

export default ReviewCard