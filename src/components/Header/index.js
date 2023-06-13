import styles from "@/styles/Navbar.module.css";
import Contacts from "./Contacts";
import Navbar from "./Navbar";

const   contactData={
    place:"Dubai Mainland",
    phone:"+971544695329",
    mail:"admin@hegalgroup.com",
    facebook:"http://facebook.com/",
    twitter:"http://twitter.com/",
    instagram:"https://instagram.com/",
    linkedin:"http://linkedin.com/"
}

const navItems=[
  [
    {name:'Home',route:'#home'},
  ],
  [
    {name:'Services',route:'#services'}
  ],
  [
    {name:'About us',route:'/about'}
  ],
  [
    {name:'Contact us',route:'#contact-us'}
  ],
]

const Header = () => {
  return (
    <header className={styles.header}>
      <Navbar navItems={navItems}/>
    </header>
  );
};

export default Header;
