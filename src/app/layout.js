import './globals.css'
import {Inter} from 'next/font/google'

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'HEGAL GROUP',
    description: 'Experience transformative growth with HEGAL, the dynamic business advisory firm that overcomes marketplace challenges.',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <div id="root">
            {children}
        </div>
        </body>
        </html>
    );
}
