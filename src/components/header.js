import React from "react"

import { Link } from "gatsby"

import StyledHeader from "../styled_components/header"
import QuillSVG from "../svg/quill.svg"
import Back_ArrowSVG from "../svg/back_arrow.svg"

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <Back_ArrowSVG id="back_arrow" />
      </Link>
      <Link to="/thoughts/">
        <QuillSVG id="quill" />{" "}
      </Link>
    </StyledHeader>
  )
}

export default Header
