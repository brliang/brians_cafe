import React from "react"
import { graphql } from "gatsby"

import Header from "../components/header"
import H1 from "../styled_components/h1"
import H2 from "../styled_components/h2"
import H3 from "../styled_components/h3"
import Hgroup from "../styled_components/hgroup"
import Main from "../styled_components/main"
import Paragraph from "../styled_components/paragraph"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <Header />
      <Hgroup>
        <H1>{frontmatter.title}</H1>
        <H2>{frontmatter.date_posted}</H2>
      </Hgroup>
      <Main>
        <Paragraph>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </Paragraph>
      </Main>
      <H3>last updated: {frontmatter.last_updated}</H3>
    </>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date_posted(formatString: "MMMM DD, YYYY")
        last_updated(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
