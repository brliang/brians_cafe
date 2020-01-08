import React from "react"

import Layout from "../components/layout"
import pages from "../constants/global"
import "../styles/global.scss"

const Jetsam = ({ data }) => <Layout pageData={data} pageTitle={pages.JETSAM} />

export default Jetsam

export const result = graphql`
  query {
    allMarkdownRemark(
      filter: {
        frontmatter: { category: { eq: "jetsam" }, date_posted: { gt: "2020" } }
      }
      sort: { order: DESC, fields: [frontmatter___date_posted] }
    ) {
      edges {
        node {
          frontmatter {
            date_posted(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
