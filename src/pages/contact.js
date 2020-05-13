import React from "react"
import SocialLinks from '../shared/social-links';
import Layout from '../shared/layout';
import styles from './contact.module.css'

export default function Contact() {
  return (
    <Layout>
      <h1 className={styles.heading}>Say hi.</h1>
      <p className={styles.subHeading}>Get in touch by completing the form below:</p>
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
      <SocialLinks />
    </Layout>
  )
}
