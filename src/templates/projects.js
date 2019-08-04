import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Portfolio from "../components/Portfolio"

// TODO redo portfolio component gives more information to
// each project

const Projects = ({ pageContext }) => {
  console.log("pagecontext", pageContext)
  return (
    <Layout>
      <Portfolio projects={pageContext.projectsData}></Portfolio>
      <Link to="/page-2/">Go to page 2</Link>
      <Link to="/all-pokemon.js/">SEE SQUIRTLE</Link>
    </Layout>
  )
}

export default Projects
