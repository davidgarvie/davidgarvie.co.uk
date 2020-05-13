import React from "react"
import { graphql } from 'gatsby'
import { formatDistance } from 'date-fns'
import Layout from '../shared/layout';
import styles from './blog-post.module.css';

function postTransformer(data) {
  const { contentfulBlogPost : { content, title, updatedAt } } = data;
  const { html, timeToRead } = content.childMarkdownRemark;

  return {
    date: formatDistance(new Date(updatedAt), new Date()),
    html,
    timeToRead,
    title,
  }
}

export default function BlogPost({ data }) {
  const { date, html, timeToRead, title } = postTransformer(data);
  return (
    <Layout>
      <h1 className={styles.heading}>{title}</h1>
      <p>Last updated {date} ago · <span>{timeToRead}</span> minutes to read.</p>
      <article className={styles.article}
        dangerouslySetInnerHTML={{
          __html: html
        }}
      />
    </Layout>
  )
}

export const query = graphql`
  query GetBlogPost($slug: String) {
    contentfulBlogPost(slug: {eq: $slug }) {
      content {
        childMarkdownRemark {
          html
          timeToRead
        }
      }
      slug
      title
      updatedAt
    }
  }
`
