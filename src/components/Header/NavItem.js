import styles from "@/styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

const NavItem = ({items}) => {
  return (
    <li className={styles.item}>
      <Link href={items[0].route}>{items[0].name}&nbsp;{items.length>1?<Image src={'/icons/down.svg'} alt="arrow" height={15} width={15} />:''}</Link>
      <div className={styles.restContainer}>
        {items.map(x=>items.indexOf(x)===0?'': <div className={styles.restItems}><Link  href={x}>{x.name}</Link> </div>)}
      </div>
    </li>
  )
}

export default NavItem