
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Noni Student Association',
  description: 'Noni Student Association',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <main>
      <Navbar/>
        <div className="container">
        {children}
        </div>
        <div className="down">
                <Footer/>
                </div>
                </main>
        </body>
    </html>
  )
}