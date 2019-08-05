import React from "react"
import projectStyles from "./project.module.css"
import Image from "../components/Image"

const Project = ({
  name,
  imgUrl,
  appName,
  description,
  githubLink,
  liveLink,
}) => {
  return (
    <div className={projectStyles.background}>
      <article className={projectStyles.project}>
        <div className={projectStyles.content}>
          <h2>{appName}</h2>
          {/* <Image img={name} /> */}
          <div className="content">
            <p>{description}</p>
          </div>
        </div>

        <div className={projectStyles.links}>
          <a href={githubLink}>
            <button className={projectStyles.button}>Github</button>
          </a>
          <a href={liveLink}>
            <button className={projectStyles.button}>Live </button>
          </a>
        </div>
      </article>
    </div>
  )
}

Project.propTypes = {}

export default Project
