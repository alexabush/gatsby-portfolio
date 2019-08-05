import React from "react"
import { Link } from "gatsby"
import sidebarStyles from "../components/sidebar.module.css"

const Sidebar = ({ blogPostUrls, children }) => {
  console.log("props", blogPostUrls)
  return (
    <div className={sidebarStyles.sidebar}>
      <main>{children}</main>
      <div>
        <h2>Sidebar</h2>
        {blogPostUrls.map(postData => {
          return (
            <Link to={postData.node.frontmatter.path}>
              {postData.node.frontmatter.path}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

Sidebar.propTypes = {}

export default Sidebar
