'use client';
import styles from "@/styles/Navbar.module.css";
import NavItem from "./NavItem";
import Hamburger from "./Hamburger";
import DropDown from "./DropDown";
import { useState } from "react";

const Navbar = ({navItems}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleHB  = ()  =>  setIsOpen(x=>!x)

  return (
    <nav className={styles.navbar}>
      <div    className={styles.logo}>
          Hegal Group
      </div>
      <ul className={styles.navItems}>
          {navItems.map(x=> <NavItem  items={x} /> )}
      </ul>
      <Hamburger toggleHB={toggleHB} isOpen={isOpen}/>
      <DropDown navItems={navItems} isOpen={isOpen}/>
        
        
    </nav>
  )
}

export default Navbar