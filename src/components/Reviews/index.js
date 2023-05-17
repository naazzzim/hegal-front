import styles from '@/styles/Home.module.css'
import CommonHeading from '../CommonHeading'
import ReviewCard from './ReviewCard'
import Slider from './Slider'

const reviewsData   =   [
    {
        reviewer:'Brandy Bum',
        designation:'Executive Engineer',
        review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis et ex, autem rerum praesentium recusandae qui hic fuga tempore blanditiis cum numquam laudantium quas ipsam at rem velit, harum, quisquam magnam quidem? Omnis mollitia sit temporibus, possimus cumque illum veritatis quas doloribus adipisci necessitatibus enim voluptatibus optio architecto veniam quos, velit harum rem consectetur perferendis quod! Recusandae aperiam vitae natus nesciunt dolores, atque, animi iusto sint sit necessitatibus expedita? Impedit?'
    },
    {
        reviewer:'Candy Hunady',
        designation:'Fashion Designers',
        review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis et ex, autem rerum praesentium recusandae qui hic fuga tempore blanditiis cum numquam laudantium quas ipsam at rem velit, harum, quisquam magnam quidem? Omnis mollitia sit temporibus, possimus cumque illum veritatis quas doloribus adipisci necessitatibus enim voluptatibus optio architecto veniam quos, velit harum rem consectetur perferendis quod! Recusandae aperiam vitae natus nesciunt dolores, atque, animi iusto sint sit necessitatibus expedita? Impedit?'
    },
    {
        reviewer:'Fanta Lover',
        designation:'Architects',
        review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis et ex, autem rerum praesentium recusandae qui hic fuga tempore blanditiis cum numquam laudantium quas ipsam at rem velit, harum, quisquam magnam quidem? Omnis mollitia sit temporibus, possimus cumque illum veritatis quas doloribus adipisci necessitatibus enim voluptatibus optio architecto veniam quos, velit harum rem consectetur perferendis quod! Recusandae aperiam vitae natus nesciunt dolores, atque, animi iusto sint sit necessitatibus expedita? Impedit?'
    },
    {
        reviewer:'Salad Sorter',
        designation:'Food Testers',
        review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis et ex, autem rerum praesentium recusandae qui hic fuga tempore blanditiis cum numquam laudantium quas ipsam at rem velit, harum, quisquam magnam quidem? Omnis mollitia sit temporibus, possimus cumque illum veritatis quas doloribus adipisci necessitatibus enim voluptatibus optio architecto veniam quos, velit harum rem consectetur perferendis quod! Recusandae aperiam vitae natus nesciunt dolores, atque, animi iusto sint sit necessitatibus expedita? Impedit?'
    },
]

const Reviews = () => {
  return (
    <div>
        <CommonHeading text={'What Others Say'}/>
        <Slider reviewsData={reviewsData} />
    </div>
  )
}

export default Reviews