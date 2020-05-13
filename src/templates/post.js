import React from "react"
import { graphql } from 'gatsby'
import { formatDistance } from 'date-fns'

function postTransformer(data) {
  const { contentfulPost : { content, title, updatedAt } } = data;
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
    <main className="container">
      <h1>{title}</h1>
      <p>Last updated {date} ago · <span>{timeToRead}</span> minutes to read.</p>
      <article 
        dangerouslySetInnerHTML={{
          __html: html
        }}
      />
    </main>
  )
}


export const query = graphql`
  query GetPost($slug: String) {
    contentfulPost(slug: {eq: $slug }) {
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
