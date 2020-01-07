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
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
