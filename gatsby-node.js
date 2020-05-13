const path = require(`path`)

async function createPages({ graphql, actions }) {
  const { createPage } = actions
  const postTemplate = path.resolve(`src/templates/blog-post.js`)
  const result = await graphql(`
    query GetAllBlogPosts {
      allContentfulBlogPost {
        nodes {
          slug
        }
      }
    }
  `);

  result.data.allContentfulBlogPost.nodes.forEach(post => {
    createPage({
      path: `blog/${post.slug}`,
      component: postTemplate,
      context: {
        slug: post.slug, 
      },
    })
  })
}

exports.createPages = createPages;
