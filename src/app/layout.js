'use client';
import './globals.css'
import {Inter} from 'next/font/google'
import {Provider} from "react-redux";
import store from "@/redux/store";
import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'HEGAL GROUP',
    description: 'Experience transformative growth with HEGAL, the dynamic business advisory firm that overcomes marketplace challenges.',
}

export default function RootLayout({children}) {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <html lang="en">
                <body className={inter.className}>
                <div id="root">
                    <Header />
                        {children}
                    <Footer />
                </div>
                </body>
                </html>
            </Provider>
        </React.StrictMode>
    );
}
