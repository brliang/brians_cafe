import React from "react"

import { Helmet } from "react-helmet"
import PropTypes from "prop-types"

import Body from "./body"
import Footer from "./footer"
import Header from "./header"

const Layout = ({ pageData, pageTitle }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Brian Liang</title>
      </Helmet>
      <Header pageTitle={pageTitle} />
      <Body pageData={pageData} pageTitle={pageTitle} />
      <Footer pageTitle={pageTitle} />
    </>
  )
}

Layout.propTypes = {
  pageData: PropTypes.object.isRequired,
  pageTitle: PropTypes.string.isRequired,
}

export default Layout
