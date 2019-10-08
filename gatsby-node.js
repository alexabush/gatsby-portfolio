const axios = require("axios")
const path = require(`path`)

const getProjects = async () => {
  let res = await axios.get(
    "https://alexabush.github.io/portfolio-data/json/portfolio-data.json"
  )
  return res.data
}

const getQuotePage = async () => {
  let res = await axios.get("https://heavy-shop.surge.sh/")
  return res.data
}

// const getBlogPosts = async () => {
//   let res = await axios.get(
//     "https://alexabush.github.io/portfolio-data/json/blog-data.json"
//   )
//   return res.data
// }

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const { projects } = await getProjects()
  // const { blogPosts } = await getBlogPosts()
  let htmlData = await getQuotePage()

  createPage({
    path: `/home`,
    component: require.resolve("./src/templates/home.js"),
    context: { projects },
  })

  createPage({
    path: `/projects`,
    component: require.resolve("./src/templates/projects.js"),
    context: { projects },
  })

  // createPage({
  //   path: `/blog`,
  //   component: require.resolve("./src/templates/blog.js"),
  //   context: { blogPosts },
  // })

  projects.forEach(project => {
    createPage({
      path: `/projects/${project.appName}/`,
      component: require.resolve("./src/templates/projectPage.js"),
      context: { project },
    })
  })

  // blogPosts.forEach(blog => {
  //   createPage({
  //     path: `/blogs/${blog.title}/`,
  //     component: require.resolve("./src/templates/blogPage.js"),
  //     context: { blog },
  //   })
  // })

  const blogPostTemplate = path.resolve(`src/templates/blogPost.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    createPage({
      path: `/blog`,
      component: require.resolve("./src/templates/blog.js"),
      context: { blogPostUrls: result.data.allMarkdownRemark.edges },
    })
    // Queries one big html file

    createPage({
      path: `/quote`,
      component: require.resolve("./src/templates/quotePage.js"),
      context: { html: htmlData },
    })

    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {
          blogPostUrls: result.data.allMarkdownRemark.edges,
        }, // additional data can be passed via context
      })
    })
  })
}
