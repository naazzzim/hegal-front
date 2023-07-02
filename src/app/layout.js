import './globals.css'
import {Inter} from 'next/font/google'

import React from "react";

import LayoutComponent from '@/components/LayoutComponent';


const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'HEGAL GROUP',
    description: 'Experience transformative growth with HEGAL, the dynamic business advisory firm that overcomes marketplace challenges.',
}

export default function RootLayout({children}) {
    return (
        <LayoutComponent font={inter}>
            {children}
        </LayoutComponent>
    );
}
