import React from "react"

import { Link } from "gatsby"
import PropTypes from "prop-types"

import pages from "../constants/global"
import H1 from "../styled_components/h1"
import StyledHeader from "../styled_components/header"
import BackArrow from "../svg/back_arrow.svg"
import Bread from "../svg/bread.svg"
import Quill from "../svg/quill.svg"

const Header = ({ pageTitle }) => {
  switch (pageTitle) {
    case pages.INDEX:
      return (
        <StyledHeader>
          <H1>hi and welcome!</H1>
        </StyledHeader>
      )
    case pages.FOOD:
      return (
        <StyledHeader>
          <Link to="/">
            <BackArrow id="back_arrow" />
          </Link>
          <H1>{pageTitle}</H1>
          <Bread id="bread" />
        </StyledHeader>
      )
    case pages.THOUGHTS:
      return (
        <StyledHeader>
          <Link to="/">
            <BackArrow id="back_arrow" />
          </Link>
          <H1>{pageTitle}</H1>
          <Quill id="quill" />
        </StyledHeader>
      )
    default:
      return (
        <StyledHeader>
          <Link to="/">
            <BackArrow id="back_arrow" />
          </Link>
          <H1>{pageTitle}</H1>
        </StyledHeader>
      )
  }
}

Header.propTypes = {
  pageTitle: PropTypes.string.isRequired,
}

export default Header
