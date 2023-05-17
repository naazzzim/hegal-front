import styles from "@/styles/Navbar.module.css";

const Hamburger = ({toggleHB,isOpen}) => {
  return (
    <div    className={styles.ham}>
        <input  className={styles.hidden} type="checkbox" name="isOpen" id="isOpen" onChange={()=>toggleHB()}/>
        <label htmlFor="isOpen" className={`${styles.label}`}>
          <div  className={`${styles.line1} ${isOpen?styles.open:''}`}></div>
          <div  className={`${styles.line3} ${isOpen?styles.open:''}`}></div>
          <div  className={`${styles.line2} ${isOpen?styles.open:''}`}></div>
        </label>
    </div>
  )
}

export default Hamburger