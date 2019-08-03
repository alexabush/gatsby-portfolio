import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/Header"
import Portfolio from "../components/Portfolio"
import Footer from "../components/Footer"

const IndexPage = props => {
  console.log("pageContext", props)
  return (
    <Layout>
      <SEO title="Alex Bush Portfolio" />
      <Header></Header>
      <Portfolio></Portfolio>
      <Footer></Footer>
      <Link to="/page-2/">Go to page 2</Link>
      <Link to="/all-pokemon.js/">SEE SQUIRTLE</Link>
    </Layout>
  )
}

export default IndexPage
