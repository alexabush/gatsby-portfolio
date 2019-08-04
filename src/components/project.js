import React from "react"
import PropTypes from "prop-types"

const Project = ({ imgUrl, appName, description, githubLink, liveLink }) => {
  return (
    <article>
      <div>
        <h2>{appName}</h2>
        <span className="image">
          <img src={imgUrl} alt={appName} />
        </span>
        <div className="content">
          <p>{description}</p>
          <a href={githubLink}>
            <button className="display-btn">Github</button>
          </a>
          <a href={liveLink}>
            <button className="display-btn">Live </button>
          </a>
        </div>
      </div>
    </article>
  )
}

Project.propTypes = {}

export default Project
