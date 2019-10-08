import React from "react"
import Link from "gatsby"
import projectStyles from "./project.module.css"
import Image from "../components/Image"
import Layout from "../components/Layout"

const Project = ({ name, appName, description, githubLink, liveLink }) => {
  return (
    <div className={projectStyles.background}>
      <article className={projectStyles.project}>
        <div className={projectStyles.content}>
          <h2>{appName}</h2>
          <div className={projectStyles.imageContainer}>
            <Image img={name} />
          </div>
          <div className={projectStyles.description}>
            <p>{description}</p>
          </div>
        </div>

        <div className={projectStyles.links}>
          <a href={githubLink}>
            <button className={projectStyles.button}>Github</button>
          </a>
          {/* <Link to="">{}</Link> */}
          {/* <a href={liveLink}>
            <button className={projectStyles.button}>Live </button>
          </a> */}
        </div>
      </article>
    </div>
  )
}

Project.propTypes = {}

export default Project
