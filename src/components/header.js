import PropTypes from "prop-types"
import React from "react"
import headerStyles from "./header.module.css"

const Header = props => (
  <header className={headerStyles.header}>
    <div
      className="header-text"
      style={{
        border: "1px solid black",
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>I'm Alex. I build web apps</h1>
      <p>
        I'm a software engineer in the Austin passionate about learning new
        technologies and shipping code.
      </p>
      <p>
        Interested in all companies leveraging technology to make a positive
        impact on the world.
      </p>
    </div>
    <div className="header-image" style={{ border: "1px solid black" }}>
      image here
    </div>
  </header>
)

Header.propTypes = {}

Header.defaultProps = {}

export default Header
