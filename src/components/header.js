import React from "react"
import headerStyles from "./header.module.css"
import ContactIcons from "./contactIcons.js"
import Image from "../components/image"

const Header = props => (
  <header className={headerStyles.header}>
    <div className={headerStyles.headerText}>
      <h1>I'm Alex. I build web apps.</h1>
      <p>Full-stack engineer. Love learning new things and solving problems.</p>
      <p>
        Passion for latest technologies and finding faster, easier, and better
        ways to get things done.
      </p>
      <p>Interested in making the world a better place with technology.</p>
    </div>
    <div className={headerStyles.imageContactContainer}>
      <div className={headerStyles.headerImage}>
        <Image img="profile" />
      </div>
      <ContactIcons />
    </div>
  </header>
)

Header.propTypes = {}

Header.defaultProps = {}

export default Header
