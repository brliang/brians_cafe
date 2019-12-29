import React from "react"

import PropTypes from "prop-types"

import Post from "./post"
import pages from "../constants/global"
import H1 from "../styled_components/h1"

const Container = ({ pageData, pageTitle }) => {
  switch (pageTitle) {
    case pages.FOOD:
      return (
        <>
          <H1>Food for thought</H1>
          {pageData.allFoodCsv.edges.map((row) => (
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
          <H1>Thoughts</H1>
          {pageData.allThoughtsCsv.edges.map((row) => (
            <Post
              title={row.node.title}
              date={row.node.date}
              content={row.node.content}
            />
          ))}
        </>
      )
    default:
      return (
        <>
          <H1>Thoughts</H1>
          {pageData.allThoughtsCsv.edges.map((row) => (
            <Post
              title={row.node.title}
              date={row.node.date}
              content={row.node.content}
            />
          ))}
        </>
      )
  }
}

Container.propTypes = {
  pageData: PropTypes.object.isRequired,
  pageTitle: PropTypes.string.isRequired,
}

export default Container
