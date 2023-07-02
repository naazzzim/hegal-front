'use client';
import { useEffect, useState } from 'react';
import styles from '@/styles/Services.module.css';
import English from '@/lang/en/markdown/golden-visa.mdx';
import Russian from '@/lang/ru/markdown/golden-visa.mdx';
import Arabic from '@/lang/ar/markdown/golden-visa.mdx';
import {useSelector} from "react-redux";

const Page = () => {
    const language = useSelector(state => state.language.language);

    return (
        <main className={styles.page}>
            {language === 'English' && <English />}
            {language === 'Russian' && <Russian />}
            {language === 'Arabic' && <Arabic />}
        </main>
    );
};

export default Page;