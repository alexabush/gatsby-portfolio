import React from "react"
import { Link } from "gatsby"
import navStyles from "./navbar.module.css"

const Navbar = props => {
  return (
    <div className={navStyles.navbar}>
      <Link to="/home">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/blog">Blog</Link>
    </div>
  )
}

Navbar.propTypes = {}

export default Navbar
