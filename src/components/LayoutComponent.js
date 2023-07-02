'use client';
// import '@/app/global.css'
import {Provider} from "react-redux";
import store from "@/redux/store";
import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const LayoutComponent = ({font,children}) => {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <html lang="en">
                <body className={font.className}>
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

export default LayoutComponent