import styles from "@/styles/Navbar.module.css";
import NavItemMob from "./NavItemMob";

const DropDown = ({navItems,isOpen,toggleHB}) => {
  return (
    <div    className={`${styles.absolute} ${isOpen?styles.open:''}`}>
        {navItems.map(x=> <NavItemMob key={x[0].name} toggleHB={toggleHB} item={x}/> )}
    </div>
  )
}

export default DropDown