import React from "react"

import { Helmet } from "react-helmet"
import PropTypes from "prop-types"

import Footer from "./footer"
import Header from "./header"
import Main from "./main"

const Layout = ({ pageData, pageTitle }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Brian Liang | {pageTitle}</title>
      </Helmet>
      <Header pageTitle={pageTitle} />
      <Main pageData={pageData} pageTitle={pageTitle} />
      <Footer />
    </>
  )
}

Layout.propTypes = {
  pageData: PropTypes.object.isRequired,
  pageTitle: PropTypes.string.isRequired,
}

export default Layout
