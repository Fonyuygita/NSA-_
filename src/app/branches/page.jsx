import { branches } from "@/utils/branchData";
import Head from "next/head";
import styles from "./branch.module.css"
import BranchCard from "@/components/branchCard/branchCard";


// Create the main component for the branch page
const Branch = () => {
    // Return the JSX for the page
    return (
      <div className={styles.container}>
        {/* Use Head component to add meta tags and title */}
        <Head>
          <title>Branch Page</title>
          <meta name="description" content="This is a page that shows various branches" />
        </Head>
        {/* Use a heading to display the page title */}
        <h1 className={styles.title}>Our Branches</h1>
        <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis aliquid quasi veniam.</p>
        {/* Use a grid to display the branch cards */}
        <div className={styles.grid}>
          {/* Map over the branches array and render a BranchCard component for each branch */}
          {branches.map((branch) => (
            <BranchCard key={branch.id} branch={branch} />
          ))}
        </div>
      </div>
    );
  };
  
  // Export the component as default
  export default Branch;
  