import React from "react"
import Project from "./project"
import ErrorBoundary from "./ErrorBoundary"
import portfolioStyles from "./portfolio.module.css"

const Portfolio = props => {
  return (
    <div className={portfolioStyles.portfolio}>
      {props.projects.map(project => {
        {
          return (
            <ErrorBoundary componentName="portfolio">
              <Project {...project} />
            </ErrorBoundary>
          )
        }
      })}
    </div>
  )
}

Portfolio.propTypes = {}

export default Portfolio
