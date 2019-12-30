import React from "react"

import PropTypes from "prop-types"

import Post from "./post"
import pages from "../constants/global"

const Container = ({ pageData, pageTitle }) => {
  switch (pageTitle) {
    case pages.FOOD:
      return (
        <>
          {pageData.allFoodCsv.edges.map(row => (
            <Post
              title={row.node.title}
              date={row.node.date}
              content={row.node.content}
            />
          ))}
        </>
      )
    case pages.THOUGHTS:
      return (
        <>
          {pageData.allThoughtsCsv.edges.map(row => (
            <Post
              title={row.node.title}
              date={row.node.date}
              content={row.node.content}
            />
          ))}
        </>
      )
    default:
      return <div />
  }
}

Container.propTypes = {
  pageData: PropTypes.object.isRequired,
  pageTitle: PropTypes.string.isRequired,
}

export default Container
