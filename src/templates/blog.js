import React from "react"
import { Link } from "gatsby"
// import projectStyles from "../components/project.module.css"
import Layout from "../components/layout"

const Blog = ({ pageContext: { blogPosts } }) => {
  console.log("porfprops", blogPosts)
  return (
    <Layout>
      <div>
        <h2>Posts</h2>
        {blogPosts.map(postData => {
          return (
            <Link to={postData.node.frontmatter.path}>
              {postData.node.frontmatter.path}
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}

Blog.propTypes = {}

export default Blog
