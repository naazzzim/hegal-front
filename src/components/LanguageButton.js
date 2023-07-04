import { useSelector } from 'react-redux';
import {useDispatch} from "react-redux";
import Image from "next/image"
import styles from '@/styles/Home2.module.css'
import lang from '../lang/lang.json'
import {languageDispatcher} from "@/redux/dispatchers/languageDispatcher";
import { useState } from 'react';




const LanguageButton = () => {
    const dispatch = useDispatch();
    const selectedLanguage = useSelector((state) => state.language.code);
    const [isOpen, setIsOpen] = useState(false);

    const handleLanguageChange = (e) => {
        const newLanguage = e;
        console.log(newLanguage);
        // setSelectedLanguage(newLanguage);
        dispatch(languageDispatcher(newLanguage));
    };
    const toggleOpen    =   ()  =>  setIsOpen(x=>!x)

    return (
    <div>
        <div    className={`${styles.languageList} ${isOpen?styles.open:''}`}>
        {Object.entries(lang).map(([key, value]) => (
                        <div key={key} onClick={()=>handleLanguageChange(key)}>
                            {value}
                        </div>
                    ))}
        </div>
        <div    className={`${styles.whatsapp} ${styles.language}`} onClick={()=>toggleOpen()}>
                <Image src={'/icons/language.svg'} width={24} height={24} alt="language"/>
        </div>
    </div>
  )
}

export default LanguageButton