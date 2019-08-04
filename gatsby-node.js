const axios = require("axios")
const path = require(`path`)

const getProjects = async () => {
  let res = await axios.get(
    "https://alexabush.github.io/portfolio-data/json/portfolio-data.json"
  )
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
  console.log(projects)

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

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)

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

    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {}, // additional data can be passed via context
      })
    })
  })
}
