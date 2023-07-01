import styles from "@/styles/Carousel.module.css";
import Image from "next/image";

const CarouselCard = ({count, item, index}) => {
    return (
        <div className={`${styles.carouselCard} ${count % 4 === index ? styles.show : ''}`}>
            <Image src={item.src} height={700} width={1920} alt={item.title}/>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button>Explore Now</button>
        </div>
    )
}
export default CarouselCard