'use client';
import {Provider, useSelector} from "react-redux";
import store from '../redux/store';
import React from 'react';
import Start from "@/app/start";

export default function Home() {

    return(
        <React.StrictMode>
            <Provider store={store}>
                <Start />
            </Provider>
        </React.StrictMode>
    );
}
