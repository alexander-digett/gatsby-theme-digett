const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')
const gatsbyThemeDigettPath = require('gatsby-remark-relative-images')
const fs = require('fs');
const mkdirp = require('mkdirp');

exports.onPreBootstrap = ({reporter}) => {
  
    const dirs = [
      './static/assets',
    ];
  
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        reporter.log(`creating the ${dir} directory`);
        mkdirp.sync(dir);
      }
    });
  };


exports.createPages = ({ actions, graphql }, themeOptions) => {
  console.log(themeOptions)
  const { createPage } = actions

  return graphql(`
    {
      markdown: allMarkdownRemark {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.markdown.edges

    posts.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve(
          require.resolve(`./src/templates/${String(edge.node.frontmatter.templateKey)}.js`)
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}