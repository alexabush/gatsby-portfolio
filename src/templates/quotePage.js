import React from "react"
import Project from "../components/project"
import projectStyles from "../components/project.module.css"
// import Layout from "../components/layout"
import { sayHi } from "@alexander_bush/tiny"
import Layout from "@alexander_bush/components"
const ProjectPage = ({ pageContext }) => {
  console.log("pageContext", pageContext)
  sayHi()
  console.log("Layout", Layout)
  return (
    <Layout>
      <div dangerouslySetInnerHTML={createMarkup(pageContext.html)} />
      //{" "}
    </Layout>
  )
}

ProjectPage.propTypes = {}

export default ProjectPage

function createMarkup(htmlString) {
  return { __html: htmlString }
}
