import React from "react"

import { Link } from "gatsby"
import PropTypes from "prop-types"

import pages from "../constants/global"
import StyledHeader from "../styled_components/header"
import BackArrow from "../svg/back_arrow.svg"
import Bread from "../svg/bread.svg"
import Quill from "../svg/quill.svg"

const Header = ({ pageTitle }) => {
  switch (pageTitle) {
    case pages.INDEX:
      return (
        <StyledHeader>
          <Link to="/food/">
            <Bread id="bread" />
          </Link>
          <Link to="/thoughts/">
            <Quill id="quill" />
          </Link>
        </StyledHeader>
      )
    case pages.FOOD:
      return (
        <StyledHeader>
          <Link to="/">
            <BackArrow id="back_arrow" />
          </Link>
          <Link to="/thoughts/">
            <Quill id="quill" />
          </Link>
        </StyledHeader>
      )
    case pages.THOUGHTS:
      return (
        <StyledHeader>
          <Link to="/">
            <BackArrow id="back_arrow" />
          </Link>
          <Link to="/food/">
            <Bread id="bread" />
          </Link>
        </StyledHeader>
      )
    default:
      return (
        <StyledHeader>
          <Link to="/">
            <BackArrow id="back_arrow" />
          </Link>
          <Link to="/food/">
            <Bread id="bread" />
          </Link>
          <Link to="/thoughts/">
            <Quill id="quill" />
          </Link>
        </StyledHeader>
      )
  }
}

Header.propTypes = {
  pageTitle: PropTypes.string.isRequired,
}

export default Header
