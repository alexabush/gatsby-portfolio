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
      <Header></Header>
      <Portfolio projects={pageContext.projectsData.projects}></Portfolio>
      <Footer></Footer>
      <Link to="/page-2/">Go to page 2</Link>
      <Link to="/all-pokemon.js/">SEE SQUIRTLE</Link>
    </Layout>
  )
}

export default IndexPage
