import React from "react"
import Nav from './nav';
import styles from './layout.module.css'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {children}
      </main>
      <Nav />
    </div>
  )
}
