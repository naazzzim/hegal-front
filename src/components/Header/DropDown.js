import styles from "@/styles/Navbar.module.css";
import NavItemMob from "./NavItemMob";
import {useDispatch, useSelector} from "react-redux";
import {languageDispatcher} from "@/redux/dispatchers/languageDispatcher";
import lang from "@/lang/lang.json";
import {useState} from "react";

const DropDown = ({navItems, isOpen, toggleHB}) => {

    const dispatch = useDispatch();
    const [selectedLanguage, setSelectedLanguage] = useState("");

    const handleLanguageChange = (e) => {
        const newLanguage = e.target.value;
        console.log(newLanguage);
        setSelectedLanguage(newLanguage);
        dispatch(languageDispatcher(newLanguage));
    };

    return (
        <div className={`${styles.absolute} ${isOpen ? styles.open : ''}`}>
            {navItems.map(x => <NavItemMob key={x[0].name} toggleHB={toggleHB} item={x}/>)}
            <div className={styles.navItemMob}>
                <select value={selectedLanguage} onChange={handleLanguageChange}>
                    {Object.entries(lang).map(([key, value]) => (
                        <option key={key} value={key}>
                            {value}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default DropDown