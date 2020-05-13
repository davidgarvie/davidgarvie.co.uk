import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, } from '@fortawesome/free-brands-svg-icons'
import styles from './social-links.module.css'

export default function SocialLinks() {
  return (
    <ul className={styles.links}>
      <li className={styles.email}><a href="mailto:garvie88@gmail.com"><FontAwesomeIcon icon={faEnvelope} alt="Email" /></a></li>
      <li className={styles.github}><a href="https://github.com/davidgarvie"><FontAwesomeIcon icon={faGithub} alt="Github" /></a></li>
      <li className={styles.linkedin}><a href="https://uk.linkedin.com/in/david-garvie"><FontAwesomeIcon icon={faLinkedin} alt="Linkedin" /></a></li>
    </ul>
  )
}
