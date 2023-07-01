'use client';

import styles from './page.module.css'
import Hero from '@/components/Hero'
import Highlight from '@/components/Highlight'
import Contact from '@/components/Contact'
import WhatsappButton from '@/components/WhatsappButton'
import HeroVideo from '@/components/HeroVideo'
import {useSelector} from "react-redux";
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";


function Start() {
    const languageData = useSelector(state => state.language);

    return(
        <>
            <Header/>
            <div className={styles.main}>
                <HeroVideo data={languageData.HeroVideo}/>
                <Hero data={languageData.hero}/>
                <Highlight data={languageData.highlight}/>
                <Contact data={languageData.contact}/>
                <WhatsappButton/>
            </div>
            <Footer/>
        </>
    );
}

export default Start;