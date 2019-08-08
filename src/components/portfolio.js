import React from "react"
import Project from "./project"
import portfolioStyles from "./portfolio.module.css"

const Portfolio = props => {
  return (
    <div className={portfolioStyles.portfolio}>
      {props.projects.map(project => {
        return <Project {...project} />
      })}
    </div>
  )
}

Portfolio.propTypes = {}

export default Portfolio
