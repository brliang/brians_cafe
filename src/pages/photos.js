import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import pages from "../constants/global"
import "../styles/global.scss"

const Photos = ({ data }) => <Layout pageData={data} pageTitle={pages.PHOTOS} />

export default Photos

export const query = graphql`
  query {
    allFile(
      filter: {
        extension: { regex: "/(jpg)|(jpeg)|(png)/" }
        sourceInstanceName: { eq: "photos" }
      }
      sort: { order: DESC, fields: [childImageSharp___fluid___originalName] }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 4000, quality: 100) {
              originalName
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
