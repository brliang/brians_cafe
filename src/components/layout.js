import React from "react"

import { Helmet } from "react-helmet"
import PropTypes from "prop-types"

import Body from "./body"
import Header from "./header"
import Footer from "../styled_components/footer"
import Chat from "../svg/chat.svg"
import Coffee from "../svg/coffee.svg"

const Layout = ({ pageTitle }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Brian Liang</title>
      </Helmet>
      <Header pageTitle={pageTitle} />
      <Body pageTitle={pageTitle} />
      <Footer>
        <a
          id="coffee_chat"
          href="mailto:bliang529@gmail.com?subject=Coffee%20Chat&body=Hi!"
        >
          <Coffee id="coffee" />
          <Chat id="chat" />
        </a>
      </Footer>
    </>
  )
}

Layout.propTypes = {
  pageTitle: PropTypes.string.isRequired,
}

export default Layout
