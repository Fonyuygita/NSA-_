import Image from "next/image";
import styles from "./home.module.css";
import Hero from "@/components/home/hero/Hero";
import Services from "@/components/services/Services";

const Home = () => {
  return (
    <section>
      <Hero/>
      <Services/>
    </section>
     );
};

export default Home;




