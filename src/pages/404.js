import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

// TODO set this up so it will work
const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>This is (likely) not the page you are looking for.</p>
    <Link to="/home">Would you like to go home?</Link>
  </Layout>
)

export default NotFoundPage
