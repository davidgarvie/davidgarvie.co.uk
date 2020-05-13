import React from "react"
import { graphql, Link } from 'gatsby'
import { format } from 'date-fns'
import styles from './index.module.css'

export default function Home(props) {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1>David Garvie</h1>
        <p>I write code that runs on the world wide web.</p>
        <nav className={styles.nav}>
          <ul>
            {/* <li>Portfolio</li>
            <li>Services</li>
            <li>About me</li> */}
            <li><Link to="/blog" className="animate-underline">Blog</Link></li>
            {/* <li>Contact</li> */}
          </ul>
        </nav>
      </div>
      <img src="https://images.ctfassets.net/ikj4hzldd7jr/16eFKLLHxrdhNX5vbCjTcQ/651f763d3da659e72f85eff95c4a42cf/code-coding-computer-data-574070.jpg"/>
    </main>
  )
}
