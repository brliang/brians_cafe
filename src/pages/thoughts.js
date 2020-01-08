import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import pages from "../constants/global"
import "../styles/global.scss"

const Thoughts = ({ data }) => (
  <Layout pageData={data} pageTitle={pages.THOUGHTS} />
)

export default Thoughts

export const result = graphql`
  query {
    allMarkdownRemark(
      filter: {
        frontmatter: { category: { eq: "thoughts" }, date_posted: { gt: "2020" } }
      }
      sort: { order: DESC, fields: [frontmatter___last_updated] }
    ) {
      edges {
        node {
          frontmatter {
            date_posted(formatString: "MMMM DD, YYYY")
            last_updated(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
