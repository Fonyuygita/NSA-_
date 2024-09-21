
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import FixedButton from '@/components/eventBtn/eventButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: "Noni Student Association",
    template: "%s - Noni Student Association",
  },

  description: "Noni Student’s Association is an umbrella group of all students and learners from Noni Subdivision of Bui Division in the North West Region of Cameroon",
  other: {
    name: "google-site-verification",
    content: "2tcesPtaKPl4hu1Lvz0ICM0phoIgcH-HXRv7SffXr9U"
  },

  //  others:{
  //   'theme-color':"fff",
  //   "twitter:image":"",
  //   "twitter:card":"summary_large_image",
  //   "og:url":"https://opengraph.b-cdn.net/production/documents/d3bf310b-7efd-4970-a2ab-aa5191f9d332.png?token=Ya0knIuEzRPEk4kMIocLreuPV0A5MVJk37t8cKfsBTI&height=630&width=1200&expires=33246834417",
  //   "og:image":"https://opengraph.b-cdn.net/production/documents/d3bf310b-7efd-4970-a2ab-aa5191f9d332.png?token=Ya0knIuEzRPEk4kMIocLreuPV0A5MVJk37t8cKfsBTI&height=630&width=1200&expires=33246834417",
  //   "og:type":":website"

  //  },


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
          <Navbar />
          <div className="container">
            {children}
          </div>
          <div className="down">
            <Footer />

          </div>
          <FixedButton />
        </main>
      </body>
    </html>
  )
}