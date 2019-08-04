import React from "react"
import PropTypes from "prop-types"
import Project from "./project"
import portfolioStyles from "./portfolio.module.css"

const Portfolio = props => {
  console.log("props portfolio", props.projects)
  return (
    <div className={portfolioStyles.portfolio}>
      {props.projects.map(project => {
        console.log(project)
        return <Project {...project} />
      })}
    </div>
  )
}

Portfolio.propTypes = {}

export default Portfolio
