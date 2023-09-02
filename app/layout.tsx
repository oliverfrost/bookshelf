import './globals.css'
import {Inter} from 'next/font/google'
import {Header} from "@/components/Header";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'BookShelf: Listen to 100,000+ audio book online',
    description: '',
    keywords: ['books', 'listen online']
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Header/>
        <main>{children}</main>
        </body>
        </html>
    )
}
