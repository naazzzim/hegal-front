import styles from "@/styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";

const NavItemMob = ({item, toggleHB}) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleOpen = () => setIsOpen(x => !x)
    return (
        <>
            <div className={styles.navItemMob}><Link onClick={toggleHB} href={item[0].route}>{item[0].name}</Link><span
                onClick={() => toggleOpen()}>&nbsp;{item.length > 1 ?
                <Image src={'/icons/down.svg'} alt="arrow" height={10} width={10}/> : ''}</span></div>
            <div className={`${styles.sub} ${isOpen ? styles.open : ''}`}>
                {item.map(x => item.indexOf(x) ? <div><Link href={x.route}>&nbsp;{x.name}</Link></div> : '')}
            </div>
        </>
    )
}

export default NavItemMob