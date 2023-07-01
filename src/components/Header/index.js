import styles from "@/styles/Navbar.module.css";
import Navbar from "./Navbar";
import {useSelector} from "react-redux";


const Header = () => {

    const languageData = useSelector(state => state.language);

    return (
        <header className={styles.header}>
            <Navbar navItems={languageData.navbar}/>
        </header>
    );
};

export default Header;
