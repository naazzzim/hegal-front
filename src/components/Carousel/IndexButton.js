import styles from "@/styles/Carousel.module.css";

const IndexButton = ({onClick,index,count}) => {
  return (
    <div  onClick={()=>onClick(index)}  className={`${styles.indexButton} ${count%4===index?styles.current:''}`}></div>
  )
}

export default IndexButton