'use client';
import {Provider, useSelector} from "react-redux";
import store from '../redux/store';
import React from 'react';
import styles from "@/app/page.module.css";
import HeroVideo from "@/components/HeroVideo";
import Hero from "@/components/Hero";
import Highlight from "@/components/Highlight";
import Contact from "@/components/Contact";
import WhatsappButton from "@/components/WhatsappButton";
import LanguageButton from "@/components/LanguageButton";


export default function Home() {
    const languageData = useSelector(state => state.language);
    return(
        <div className={styles.main}>
            <HeroVideo data={languageData.HeroVideo}/>
            <Hero data={languageData.hero}/>
            <Highlight data={languageData.highlight}/>
            <Contact data={languageData.contact}/>
            <WhatsappButton/>
            <LanguageButton />
        </div>
    );
}
