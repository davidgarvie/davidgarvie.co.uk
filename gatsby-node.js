const path = require(`path`)

async function createPages({ graphql, actions }) {
  const { createPage } = actions
  const postTemplate = path.resolve(`src/templates/post.js`)
  const result = await graphql(`
    query getPosts {
      allContentfulPost {
        nodes {
          slug
        }
      }
    }
  `);

  result.data.allContentfulPost.nodes.forEach(post => {
    createPage({
      path: `posts/${post.slug}`,
      component: postTemplate,
      context: {
        slug: post.slug, 
      },
    })
  })
}

exports.createPages = createPages;
