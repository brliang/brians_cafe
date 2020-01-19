import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"

import Header from "./header"
import Body from "./body"

const Layout = ({ pageData, pageTitle }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta content="Brian Liang" name="author" />
        <meta content="Brian Liang Website" name="descripton" />
        <meta content="Brian Liang | Software Engineer" property="og:title" />
        <meta content="brians.cafe" property="og:site_name" />
        <title>Bliang | {pageTitle}</title>
      </Helmet>
      <Header pageTitle={pageTitle} />
      <Body pageData={pageData} pageTitle={pageTitle} />
    </>
  )
}

Layout.propTypes = {
  pageData: PropTypes.object.isRequired,
  pageTitle: PropTypes.string.isRequired,
}

export default Layout
