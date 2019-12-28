import React from "react"

import { Helmet } from "react-helmet"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"
import PropTypes from "prop-types"

import Body from "./body"
import Header from "./header"
import Footer from "../styled_components/footer"
import ChatSVG from "../svg/chat.svg"
import CoffeeSVG from "../svg/coffee.svg"

const Layout = ({ pageTitle }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Brian's Cafe</title>
      </Helmet>
      <Header />
      <Body pageTitle={pageTitle} />
      <Footer>
        <a
          id="coffee_chat"
          href="mailto:bliang529@gmail.com?subject=Coffee%20Chat&body=Hi!"
          onClick={e => {
            e.preventDefault()
            trackCustomEvent({
              category: "Email Link",
              action: "Click",
            })
          }}
        >
          <CoffeeSVG id="coffee" />
          <ChatSVG id="chat" />
        </a>
      </Footer>
    </>
  )
}

Layout.propTypes = {
  pageTitle: PropTypes.string.isRequired,
}

export default Layout
