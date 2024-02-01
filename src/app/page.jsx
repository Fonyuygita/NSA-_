import Image from "next/image";
import styles from "./home.module.css";
import Hero from "@/components/home/hero/Hero";
import Services from "@/components/services/Services";
import Executives from "@/components/executive/Executive";

const Home = () => {
  return (
    <section>
      <Hero/>
      <Services/>
      <Executives/>
    </section>
     );
};

export default Home;




