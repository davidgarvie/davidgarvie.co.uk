import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin,} from '@fortawesome/free-brands-svg-icons'
import styles from './contact.module.css'

export default function Contact(props) {

  return (
    <main className={styles.contact}>
      <h1>Say hi.</h1>
      <p>Get in touch by completing the form below:</p>
      <form className={styles.form} name="contact" action="/success" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" required placeholder="Name"></input>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" required placeholder="Email"></input>
        <label htmlFor="phone">Phone Number:</label>
        <input type="phone" name="phone" placeholder="Telephone number"></input>
        <label htmlFor="enquiry">Enquiry:</label>
        <textarea name="enquiry" placeholder="Your enquiry"></textarea>
        <button type="submit">Submit</button>
      </form>
      <ul className={styles.links}>
        <li className={styles.email}><a href="mailto:garvie88@gmail.com"><FontAwesomeIcon icon={faEnvelope} alt="Email" /></a></li>
        <li className={styles.github}><a href="https://github.com/davidgarvie"><FontAwesomeIcon icon={faGithub} alt="Github"/></a></li>
        <li className={styles.linkedin}><a href="https://uk.linkedin.com/in/david-garvie"><FontAwesomeIcon icon={faLinkedin} alt="Linkedin"/></a></li>
      </ul>
    </main>
  )
}
