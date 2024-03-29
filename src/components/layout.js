/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Navbar from "./navbar"
import PropTypes from "prop-types"
import "./layout.css"
import layoutStyles from "./layout.module.css"

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.layout}>
      <Navbar />
      <main className={layoutStyles.content}>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
