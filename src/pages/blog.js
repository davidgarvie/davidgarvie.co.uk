import React from "react"
import { graphql, Link } from 'gatsby'
import { format } from 'date-fns'
import Layout from '../shared/layout';

export default function Blog(props) {
  const data = props.data.allContentfulBlogPost.nodes;
  return (
    <Layout>
      <h1>David's Blog</h1>
      <ul className="list">
        {data.map(post => (
          <li key={post.slug}>
            <h2>
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <span>{format(new Date(post.createdAt), 'do MMM')}</span>
          </li>
        ))}
      </ul>
    </Layout>
  )
}


export const query = graphql`
  query GetBlogPostsQuery {
    allContentfulBlogPost {
      nodes {
        createdAt
        slug
        title
      }
    }
  }
`
