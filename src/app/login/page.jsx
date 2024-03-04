
import React from 'react'
import styles from "./login.module.css"
import LoginForm from '@/components/loginaForm/LoginForm'
import { handleLogin } from '@/lib/actions'

const page = async() => {

  
// create a server action to handle our github login


  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleLogin}>
          <button className={styles.github}>Login with Github</button>
        </form>
        <LoginForm/>
      </div>
    </div>

  )
}

export default page
