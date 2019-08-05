import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function LargeAstronaut() {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "ConnectFour.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}
