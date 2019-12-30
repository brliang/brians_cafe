import React from "react"

import PropTypes from "prop-types"

import Contact from "./contact"
import pages from "../constants/global"
import StyledFooter from "../styled_components/footer"
import Li from "../styled_components/li"
import Ul from "../styled_components/ul"
import Bread from "../svg/bread.svg"
import Quill from "../svg/quill.svg"

const Footer = ({ pageTitle }) => {
  switch (pageTitle) {
    case pages.INDEX:
      return (
        <>
          <StyledFooter>
            <Ul>
              <Li>
                <Bread id="bread" />
                {pages.FOOD} - coming soon
              </Li>
              <Li>
                <Quill id="quill" />
                {pages.THOUGHTS} - coming soon
              </Li>
            </Ul>
          </StyledFooter>
          <Contact />
        </>
      )
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
