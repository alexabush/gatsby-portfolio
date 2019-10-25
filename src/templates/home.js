import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header"
import Portfolio from "../components/Portfolio"
import Footer from "../components/Footer"
import ErrorBoundary from "../components/ErrorBoundary"

const IndexPage = ({ pageContext }) => {
  return (
    <ErrorBoundary componentName="IndexPage">
      <Layout>
        <SEO title="Alex Bush Portfolio" />
        <Header />
        <div>
          <h3>Portfolio</h3>
          <ErrorBoundary componentName="portfolio in index page">
            <Portfolio projects={pageContext.projects} />
          </ErrorBoundary>
        </div>
        <Footer />
      </Layout>
    </ErrorBoundary>
  )
}

export default IndexPage
