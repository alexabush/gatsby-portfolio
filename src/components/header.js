import React from "react"
import headerStyles from "./header.module.css"
import ContactIcons from "./contactIcons.js"
const Header = props => (
  <header className={headerStyles.header}>
    <div className={headerStyles.headerText}>
      <h1>I'm Alex. I build web apps</h1>
      <p>
        I'm a software engineer in the Austin passionate about learning new
        technologies and shipping code.
      </p>
      <p>
        Interested in all companies leveraging technology to make a positive
        impact on the world.
      </p>
    </div>
    <div className="header-image">
      {/* <img
        src="./src/images/rithm_profile_direct_no_glasses_cropped.png"
        alt="Profile Picture"
      /> */}
      <img src="./src/images/gatsby-astronaut.png" alt="Profile Picture" />
      <ContactIcons />
    </div>
  </header>
)

Header.propTypes = {}

Header.defaultProps = {}

export default Header
