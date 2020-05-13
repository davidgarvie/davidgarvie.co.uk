import React from "react"
import { graphql, Link } from 'gatsby'
import styles from './nav.module.css'

export default function Nav(props) {
  const url = typeof window !== 'undefined' ? window.location.href : '';
  console.log(styles.active);
  return (
    <nav className={styles.nav}>
      <ul>
        <li><Link to="/blog" className={`animate-underline ${url.includes('blog') ? styles.active : ''}`}>Blog</Link></li>
        <li><Link to="/contact" className={`animate-underline ${url.includes('contact') ? styles.active : ''}`}>Contact</Link></li>
      </ul>
    </nav>
  )
}
