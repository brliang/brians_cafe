import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

import Header from "../components/header"
import H1 from "../styled_components/h1"
import H2 from "../styled_components/h2"
import H3 from "../styled_components/h3"
import Paragraph from "../styled_components/paragraph"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta content="Brian Liang" name="author" />
        <meta content="Brian Liang Website" name="descripton" />
        <meta content="Brian Liang | Software Engineer" property="og:title" />
        <meta content="brians.cafe" property="og:site_name" />
        <title>Brian Liang | {frontmatter.title}</title>
      </Helmet>
      <Header pageTitle={frontmatter.title} />
      <H1>{frontmatter.title}</H1>
      <H2>{frontmatter.date_posted}</H2>
      <Paragraph>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <H3>last updated: {frontmatter.last_updated}</H3>
      </Paragraph>
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
