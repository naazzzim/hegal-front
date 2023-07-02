'use client';
import styles from "@/styles/Navbar.module.css";
import NavItem from "./NavItem";
import Hamburger from "./Hamburger";
import DropDown from "./DropDown";
import {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {useDispatch} from "react-redux";
import {languageDispatcher} from "@/redux/dispatchers/languageDispatcher";
import lang from '../../lang/lang.json'
import { useSelector } from 'react-redux';

const Navbar = ({navItems}) => {
    const [isOpen, setIsOpen] = useState(false);
    // const [selectedLanguage, setSelectedLanguage] = useState("");
    const selectedLanguage = useSelector((state) => state.language.code);
    const dispatch = useDispatch();

    const handleLanguageChange = (e) => {
        const newLanguage = e.target.value;
        console.log(newLanguage);
        // setSelectedLanguage(newLanguage);
        dispatch(languageDispatcher(newLanguage));
    };

    const toggleHB = () => setIsOpen((x) => !x);

    return (
        <nav className={styles.navbar} id="home">
            <Link href={'/'} className={styles.logo}>
                <Image src={'/hegal.png'} width={150} height={150} alt="Hegal Group"/>
            </Link>
            <ul className={styles.navItems}>
                {navItems.map((x) => <NavItem key={x[0].name} items={x}/>)}
                <select value={selectedLanguage} onChange={handleLanguageChange}>
                    {Object.entries(lang).map(([key, value]) => (
                        <option key={key} value={key}>
                            {value}
                        </option>
                    ))}
                </select>
            </ul>
            <Hamburger toggleHB={toggleHB} isOpen={isOpen}/>
            <DropDown navItems={navItems} toggleHB={toggleHB} isOpen={isOpen}/>
        </nav>
    );
};

export default Navbar