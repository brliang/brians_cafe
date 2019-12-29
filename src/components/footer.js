import React from "react"

import PropTypes from "prop-types"

import Contact from "./contact"
import pages from "../constants/global"

const Footer = ({ pageTitle }) => {
  switch (pageTitle) {
    case pages.INDEX:
      return <Contact />
    case pages.FOOD:
    case pages.THOUGHTS:
    default:
      return <div />
  }
}

Footer.propTypes = {
  pageTitle: PropTypes.string.isRequired,
}

export default Footer
