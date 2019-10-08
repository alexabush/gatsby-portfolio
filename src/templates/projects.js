import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Portfolio from "../components/Portfolio"

// TODO redo portfolio component gives more information to
// each project

const Projects = ({ pageContext }) => {
  return (
    <Layout>
      <h1>Projects</h1>
      <Portfolio projects={pageContext.projects}></Portfolio>
    </Layout>
  )
}

export default Projects
