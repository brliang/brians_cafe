import React from "react"

import { graphql } from "gatsby"

import Layout from "../components/layout"
import pages from "../constants/global"

const Thoughts = ({ data }) => <Layout pageData={data} pageTitle={pages.THOUGHTS} />

export default Thoughts

export const IndexQuery = graphql`
  query {
    allThoughtsCsv {
      edges {
        node {
          title
          date
          content
        }
      }
    }
  }
`
