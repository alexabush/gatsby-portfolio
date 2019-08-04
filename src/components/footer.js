import React from "react"
import ContactIcons from "./contactIcons.js"
import FooterStyles from "./footer.module.css"

const Footer = props => {
  return (
    <footer className={FooterStyles.footer}>
      <h3>Contact Me</h3>
      <div className={FooterStyles.contactContainer}>
        <ContactIcons />
      </div>
    </footer>
  )
}

Footer.propTypes = {}

export default Footer
