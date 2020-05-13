import React from "react"
import { graphql, Link } from 'gatsby'
import Img from "gatsby-image"
import styles from './index.module.css'
import Nav from '../shared/nav';

export default function Home(props) {
  const { backgroundImage, content, title } = props.data.allContentfulHomePage.nodes[0];
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1>{title}</h1>
        <p>{content}</p>
        <Nav />
      </div>
      <Img fluid={backgroundImage.fluid} style={{
        left: 0,
        height: '100vh',
        position: 'absolute',
        top: 0,
        width: '100%',
        zIndex: -1
      }} />
    </main>
  )
}

export const query = graphql`
  query GetHomePageContent {
    allContentfulHomePage {
      nodes {
        content
        title
        backgroundImage {
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
`