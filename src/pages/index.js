import React, { useEffect } from "react"
import { navigate } from "gatsby"

const IndexPage = props => {
  useEffect(() => {
    navigate("/home")
  }, [])
  return null
}

export default IndexPage
