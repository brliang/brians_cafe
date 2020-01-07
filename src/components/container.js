import React from "react"
import PropTypes from "prop-types"

import Post from "./post"
import pages from "../constants/global"
import Li from "../styled_components/li"
import Ul from "../styled_components/ul"

const Container = ({ pageData, pageTitle }) => {
  switch (pageTitle) {
    case pages.THOUGHTS:
      return (
        <Ul>
          {pageData.allMarkdownRemark.edges.map(edge => (
            <Li key={edge.node.frontmatter.title}>
              <Post
                date={edge.node.frontmatter.date}
                path={edge.node.frontmatter.path}
                title={edge.node.frontmatter.title}
              />
            </Li>
          ))}
        </Ul>
      )
    case pages.PHOTOS:
    case pages.JETSAM:
    default:
      return <div />
  }
}

Container.propTypes = {
  pageData: PropTypes.object.isRequired,
  pageTitle: PropTypes.string.isRequired,
}

export default Container
