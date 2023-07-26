import './globals.css'
import {Inter} from 'next/font/google'

import React from "react";

import LayoutComponent from '@/components/LayoutComponent';


const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'HEGAL GROUP',
    description: 'Experience transformative growth with HEGAL, the dynamic business advisory firm that overcomes marketplace challenges.',
    category:'Business',
    generator: 'Next.js',
    applicationName: 'Hegal Group',
    referrer: 'origin-when-cross-origin',
    keywords: ['Hegal Group','hegalgroup.ae','Audit','UAE','Accounting','Book keeping','vat','tax','golden visa','company formation'],
    authors: [{ name: 'Nazim Jabir', url: 'https://naazzzim.github.io' }],
    colorScheme: 'dark',
    creator: 'Nazim Jabir',
    publisher: 'Hegal Group',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph:{
        title: 'HEGAL GROUP',
    description: 'Experience transformative growth with HEGAL, the dynamic business advisory firm that overcomes marketplace challenges.',
    url: 'https://www.hegalgroup.ae',
    siteName: 'HEGAL GROUP',
    locale: 'en_US',
    type: 'website',
    }
}

export default function RootLayout({children}) {
    return (
        <LayoutComponent font={inter}>
            {children}
        </LayoutComponent>
    );
}
