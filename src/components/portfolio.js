import React from "react"
import PropTypes from "prop-types"
import Project from "./project"
import portfolioStyles from "./portfolio.module.css"

const Portfolio = props => {
  return (
    <div className={portfolioStyles.portfolio}>
      {[1, 2, 3, 4, 5, 6].map(project => {
        return <Project />
      })}
    </div>
  )
}

Portfolio.propTypes = {}

export default Portfolio
