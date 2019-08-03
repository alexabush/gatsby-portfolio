import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import navStyles from "./navbar.module.css"

const Navbar = props => {
  return (
    <div className={navStyles.navbar}>
      <Link to="/page-2/">Home</Link>
      <Link to="/page-2/">Projects</Link>
      <Link to="/page-2/">Blog</Link>
    </div>
  )
}

Navbar.propTypes = {}

export default Navbar
