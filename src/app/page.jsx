
import styles from "./home.module.css";
import Hero from "@/components/home/hero/Hero";
import Services from "@/components/services/Services";
import Executives from "@/components/executive/Executive";
import Objectives from "@/components/objectives/Objectives";
import TestimonialsPage from "@/components/testimonial/Testimonial";

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




