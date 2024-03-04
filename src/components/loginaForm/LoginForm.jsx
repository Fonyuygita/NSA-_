"use client";

// import { login } from "@/lib/action";
import styles from "./loginForm.module.css";

import Link from "next/link";




const LoginForm = () => {
    

   
  return (
    <form className={styles.form} action="">
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
    
      <Link href="/register">
        {"Don't have an account?"} <b>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;
