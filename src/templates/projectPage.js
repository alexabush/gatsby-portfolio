import React from "react"
import Project from "../components/project"
import projectStyles from "../components/project.module.css"
import Layout from "../components/layout"

const ProjectPage = ({ pageContext: { project } }) => {
  console.log("porfprops", project)
  return (
    <Layout>
      <div className={projectStyles.project}>
        <Project {...project} />
      </div>
    </Layout>
  )
}

ProjectPage.propTypes = {}

export default ProjectPage
