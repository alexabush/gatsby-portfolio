import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header"
import Portfolio from "../components/Portfolio"
import Footer from "../components/Footer"

const IndexPage = ({ pageContext }) => {
  console.log("pagecontext", pageContext)
  return (
    <Layout>
      <SEO title="Alex Bush Portfolio" />
      <Header />
      <div>
        <h3>Portfolio</h3>
        <Portfolio projects={pageContext.projects} />
      </div>

      <Footer />
    </Layout>
  )
}

export default IndexPage
