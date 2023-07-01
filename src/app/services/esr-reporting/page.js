'use client';
import { useEffect, useState } from 'react';
import styles from '@/styles/Services.module.css';
import English from "@/lang/en/markdown/esr.mdx";
import Russian from "@/lang/ru/markdown/esr.mdx";
import Arabic from "@/lang/ar/markdown/esr.mdx";

const Page = () => {
    const [language, setLanguage] = useState('');

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const lang = urlParams.get('language');
        setLanguage(lang);
    }, []);

    return (
        <main className={styles.page}>
            {language === 'English' && <English />}
            {language === 'Russian' && <Russian />}
            {language === 'Arabic' && <Arabic />}
        </main>
    );
};


export default Page;