
import styles from "./home.module.css";
import Hero from "@/components/home/hero/Hero";
import Services from "@/components/services/Services";
import Executives from "@/components/executive/Executive";
import Objectives from "@/components/objectives/Objectives";
import TestimonialsPage from "@/components/testimonial/Testimonial.jsx";
import FixedButton from "@/components/eventBtn/eventButton";


export const metadata = {
  title: "Noni students Association, N.S.Ar",
  description:
    "Noni Student’s Association is an umbrella group of all students and learners from Noni Subdivision of Bui Division in the North West Region of Cameroon",
  keywords: [
    "nonistudens",
    "noni students association",
    "noni students",
    "nsa",
    "N.S.A",
    "noni website",
    "noni students website",
    "noni students association website",
    "noni",
    "students association noni",
    "noni vercel",
    "studentsassociation noni",
    "nonistudents association",
    
  ],
  openGraph: {
    url: "https://nonistudents.vercel.app",
    type: "website",
    title: "Student Association | Noni Students Association",
    description:
      "Noni Student’s Association is an umbrella group of all students and learners from Noni Subdivision of Bui Division in the North West Region of Cameroon",
    images: [
      {
        url: "https://i.ibb.co/DQ1KsLM/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "gita"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Noni studentns | Association",
    description:
      " Noni students, ",
    creator: "@nonistudents",
    site: "@nonistudents",
    images: [
      {
        url: "https://i.ibb.co/DQ1KsLM/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "nonistudents"
      }
    ]
  },
  alternates: {
    canonical: "https://nonistudents.vercel.app"
  }
};



const Home = () => {

  return (
    <section className={styles.content}> 
   
      <Hero/>
      <Executives/>
      <Services/>
      <Objectives/>
      <TestimonialsPage/>
      

    </section>
     );
};

export default Home;




