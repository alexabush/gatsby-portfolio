import React from "react"
// import projectStyles from "../components/project.module.css"
import Layout from "../components/layout"

const Blog = ({ pageContext: { blog } }) => {
  console.log("porfprops", blog)
  return (
    <Layout>
      <div>
        blogpost
        {/* <div className={projectStyles.blog}> */}
        {/* <Blog {...blog} /> */}
      </div>
    </Layout>
  )
}

Blog.propTypes = {}

export default Blog
