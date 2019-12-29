import React from "react"

import { graphql } from "gatsby"

import Layout from "../components/layout"
import pages from "../constants/global"
import "../styles/global.scss"

const Food = ({ data }) => <Layout pageData={data} pageTitle={pages.FOOD} />

export default Food

export const IndexQuery = graphql`
  query {
    allFoodCsv {
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
