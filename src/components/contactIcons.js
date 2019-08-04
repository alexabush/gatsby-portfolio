import React from "react"
import { Link } from "gatsby"
import ContactIconStyles from "./contactIcons.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faCoffee } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faFile } from "@fortawesome/free-solid-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core"

library.add(faCoffee)
library.add(faGithub)

const ContactIcons = props => {
  return (
    <nav className={ContactIconStyles.contactIcons}>
      <FontAwesomeIcon size="lg" icon={faGithub} />
      <FontAwesomeIcon size="lg" icon={faLinkedin} />
      <FontAwesomeIcon size="lg" icon={faEnvelope} />
      <FontAwesomeIcon size="lg" icon={faFile} />
    </nav>
  )
}

ContactIcons.propTypes = {}

export default ContactIcons

{
  /* <ul class="icons">
<li>
    <a href="https://github.com/alexabush" class="icon fa-github">
        <span class="label">GitHub</span>
    </a>
</li>
<li>
    <a href="https://www.linkedin.com/in/alexabush/" class="icon fa-linkedin-square"
    >
        <span class="label">LinkedIn</span>
    </a>
</li>
<li>
    <a href="mailto:alexabush7@gmail.com" class="icon fa-envelope"
    >
        <span class="label">Email</span>
    </a>
</li>
<li>
    <a href="https://alex-bush-resume.alexanderbush7.now.sh/" class="icon fa-file"
    >
        <span class="label">Resume</span>
    </a>
</li>
</ul> */
}
