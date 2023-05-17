import styles from '@/styles/Home.module.css'
import ReviewCard from './ReviewCard'

const Slider = ({reviewsData}) => {
  return (
    <div    className={styles.slider}>
        <div    className={styles.reviewsContainer}>
            {
                reviewsData.map(x   =>  <ReviewCard item={x} /> )
            }
            <ReviewCard item={reviewsData[0]}/>
        </div>
    </div>
  )
}

export default Slider