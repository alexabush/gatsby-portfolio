import React from "react"
import { Link } from "gatsby"
import navStyles from "./navbar.module.css"

const Navbar = props => {
  return (
    <nav className={navStyles.navbar}>
      <Link className={navStyles.link} to="/home">
        Home
      </Link>
      <Link className={navStyles.link} to="/projects">
        Projects
      </Link>
      <Link className={navStyles.link} to="/blog">
        Blog
      </Link>
    </nav>
  )
}

Navbar.propTypes = {}

export default Navbar
