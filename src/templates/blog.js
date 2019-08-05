import React from "react"
import { Link } from "gatsby"
// import projectStyles from "../components/project.module.css"
import Layout from "../components/layout"
import Sidebar from "../components/sidebar"

const Blog = ({ pageContext: { blogPostUrls } }) => {
  return (
    <Layout>
      <Sidebar blogPostUrls={blogPostUrls}>
        <div>
          <h2>Posts</h2>
          {blogPostUrls.map(postData => {
            return (
              <Link to={postData.node.frontmatter.path}>
                {postData.node.frontmatter.path}
              </Link>
            )
          })}
        </div>
      </Sidebar>
    </Layout>
  )
}

Blog.propTypes = {}

export default Blog
