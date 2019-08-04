import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = props => {
  return (
    <Layout>
      <Link to="/home">Go Home</Link>
      <div>Build in auto redirect</div>
    </Layout>
  )
}

export default IndexPage
