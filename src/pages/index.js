import React from "react"
import { graphql, Link } from 'gatsby'
import { format } from 'date-fns'

export default function Home(props) {
  const data = props.data.allContentfulPost.nodes;
  return (
    <main className="container">
      <h1>David's Blog</h1>
      <ul className="list">
        {data.map(post => (
          <li key={post.slug}>
            <h2>
              <Link to={`/posts/${post.slug}`}>{post.title}</Link>
            </h2>
            <span>{format(new Date(post.createdAt), 'do MMM')}</span>
          </li>
        ))}
      </ul>
    </main>
  )
}


export const query = graphql`
query HomePageQuery {
  allContentfulPost {
    nodes {
      createdAt
      slug
      title
    }
  }
}
`
