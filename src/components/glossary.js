import React from "react"
import PropTypes from "prop-types"

import Post from "./post"
import pages from "../constants/global"

const Glossary = ({ pageData, pageTitle }) => {
  switch (pageTitle) {
    case pages.THOUGHTS:
    case pages.JETSAM:
      return (
        <ul>
          {pageData.allMarkdownRemark.edges.map(edge => (
            <li key={edge.node.frontmatter.title}>
              <Post
                date_posted={edge.node.frontmatter.date_posted}
                path={edge.node.frontmatter.path}
                title={edge.node.frontmatter.title}
              />
            </li>
          ))}
        </ul>
      )
    case pages.PHOTOS:
    default:
      return <div />
  }
}

Glossary.propTypes = {
  pageData: PropTypes.object.isRequired,
  pageTitle: PropTypes.string.isRequired,
}

export default Glossary
