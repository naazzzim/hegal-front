import styles from "@/styles/Navbar.module.css";
import NavItemMob from "./NavItemMob";

const DropDown = ({navItems,isOpen}) => {
  return (
    <div    className={`${styles.absolute} ${isOpen?styles.open:''}`}>
        {navItems.map(x=> <NavItemMob item={x}/> )}
    </div>
  )
}

export default DropDown