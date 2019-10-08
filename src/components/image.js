import React from "react"
import LargeAstronaut from "../queries/astronaut"
import Logo from "../queries/logo"
import BattleshipImage from "../queries/battleshipImage"
import ConnectFourImage from "../queries/connectFourImage"
import SnakeImage from "../queries/snakeImage"
import ProfilePicture from "../queries/profilePic"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = ({ img }) => {
  const images = {
    LargeAstronaut: <LargeAstronaut />,
    gatsbyIcon: <Logo />,
    battleship: <BattleshipImage />,
    connectFour: <ConnectFourImage />,
    snake: <SnakeImage />,
    fitness: <Logo />,
    language: <Logo />,
    anki: <Logo />,
    profile: <ProfilePicture />,
  }
  return images[img] || images["gatsbyIcon"]
}

export default Image
