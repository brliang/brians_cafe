import React from "react"

import { trackCustomEvent } from "gatsby-plugin-google-analytics"
import { Helmet } from "react-helmet"
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
        <title>Brian Liang</title>
      </Helmet>
      <Header />
      <Body pageTitle={pageTitle} />
      <Footer>
        <button
          onClick={e => {
            //e.preventDefault()
            trackCustomEvent({
              category: "Email Link",
              action: "Click",
            })
          }}
          style={{ backgroundColor: `white`, border: `none` }}
        >
          <a
            id="coffee_chat"
            href="mailto:bliang529@gmail.com?subject=Coffee%20Chat&body=Hi!"
          >
            <CoffeeSVG id="coffee" />
            <ChatSVG id="chat" />
          </a>
        </button>
      </Footer>
    </>
  )
}

Layout.propTypes = {
  pageTitle: PropTypes.string.isRequired,
}

export default Layout
