import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import pages from "../constants/global"
import StyledHeader from "../styled_components/header"
import H2 from "../styled_components/h2"

const Header = ({ pageTitle }) => {
  switch (pageTitle) {
    case pages.INDEX:
      return <StyledHeader />
    case pages.THOUGHTS:
    case pages.JETSAM:
    case pages.PHOTOS:
    default:
      return (
        <StyledHeader>
          <H2>
            <Link to="/">home</Link>
          </H2>
          <H2>
            <Link to="/thoughts/">thoughts</Link>
          </H2>
          <H2>
            <Link to="/photos/">photos</Link>
          </H2>
          <H2>
            <Link to="/jetsam/">jetsam</Link>
          </H2>
        </StyledHeader>
      )
  }
}

Header.propTypes = {
  pageTitle: PropTypes.string.isRequired,
}

export default Header
