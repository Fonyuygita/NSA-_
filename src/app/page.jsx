
import styles from "./home.module.css";
import Hero from "@/components/home/hero/Hero";
import Services from "@/components/services/Services";
import Executives from "@/components/executive/Executive";
import Objectives from "@/components/objectives/Objectives";
import TestimonialsPage from "@/components/testimonial/Testimonial.jsx";
import Head from "next/head";

const Home = () => {
  return (
    <section className={styles.content}> 
    <Head>
    <meta name="google-site-verification" content="2tcesPtaKPl4hu1Lvz0ICM0phoIgcH-HXRv7SffXr9U" />
  </Head>
      <Hero/>
      <Executives/>
      <Services/>
      <Objectives/>
      <TestimonialsPage/>
    </section>
     );
};

export default Home;




