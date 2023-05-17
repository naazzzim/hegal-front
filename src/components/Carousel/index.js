import styles from "@/styles/Carousel.module.css";
import { useEffect, useState } from "react"
import CarouselCard from "./CarouselCard";
import IndexButton from "./IndexButton";


const CarouselData  =   [
    {
        title:'Corporate Tax',
        description:'Impeccable corporate tax services to ensure absolute compliance with the new regulations',
        src:'/category.jpg',
        route:'#'
    },
    {
        title:'VAT Services',
        description:'With our expert VAT Services in the UAE, you can count on us to handle all the VAT requirements under one roof',
        src:'/coverimg.jpg',
        route:'#'
    },
    {
        title:'Audit & Assurance Services',
        description:'We provide clear and useful financial information on the basis of which you can make the right decisions',
        src:'/coverimg.png',
        route:'#'
    },
    {
        title:'GoAML',
        description:'We provide clear and useful financial information on the basis of which you can make the right decisions',
        src:'/jonita.jpg',
        route:'#'
    },
]
const Carousel = () => {
    const [count, setCount] = useState(0)
    const [clickNext, setClickNext] = useState(false)
    const onChange  =   (index) =>  {
        setCount(index)
        setClickNext(x=>!x)
    }
    useEffect(()=>{
       const timer   =   setInterval(()=>setCount(x=>x+1),5000)
        return ()=>clearInterval(timer)
    },[clickNext])
  return (
    <section    className={styles.carousel}>
        {
            CarouselData.map(x=> <CarouselCard count={count} item={x} index={CarouselData.indexOf(x)}/> )
        }
        <div    className={styles.buttonContainer}>
            {
                CarouselData.map(x=> <IndexButton count={count} index={ CarouselData.indexOf(x)}  onClick={onChange} /> )
            }
        </div>
    </section>
  )
}

export default Carousel