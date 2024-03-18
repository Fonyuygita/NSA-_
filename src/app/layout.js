
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title:{
    default:"Noni Student Association",
    template:"%s - Noni Student Association",
  },

  description:"Noni Student’s Association is an umbrella group of all students and learners from Noni Subdivision of Bui Division in the North West Region of Cameroon",
 
  twitter :{
    card:"summary-large-image"
  },

whatsapp :{
    card:"summary-large-image"
  },
  keywords: [
    "nsa",
    "noni",
    "n.s.a",
    "nkey vandoline",
    "north west region",
    "bamenda",
    "student",
    "association",
    "237",
    "bambili"
  ],

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