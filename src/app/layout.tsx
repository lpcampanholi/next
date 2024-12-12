import type { Metadata } from 'next'

// These styles apply to every route in the application
import './globals.css'
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
    title: {
        default: "Primeira aplicação Next",
        template: "%s | LP"
    },
    description: "",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-br">
            <body>
                <Header />
                    <main className="p-6">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
