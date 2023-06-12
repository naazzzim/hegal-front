'use client';
import styles from "@/styles/Navbar.module.css";
import NavItem from "./NavItem";
import Hamburger from "./Hamburger";
import DropDown from "./DropDown";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({navItems}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleHB  = ()  =>  setIsOpen(x=>!x)

  return (
    <nav className={styles.navbar}  id="home">
      <Link  href={'#home'}  className={styles.logo}>
          <Image src={'/hegal.png'} width={150} height={150} alt="Hegal Group"/>
      </Link>
      <ul className={styles.navItems}>
          {navItems.map(x=> <NavItem key={x[0].name}  items={x} /> )}
      </ul>
      <Hamburger toggleHB={toggleHB} isOpen={isOpen}/>
      <DropDown navItems={navItems} toggleHB={toggleHB} isOpen={isOpen}/>
        
        
    </nav>
  )
}

export default Navbar