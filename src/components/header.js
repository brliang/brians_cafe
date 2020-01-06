import React from "react"

import { Link } from "gatsby"

import StyledHeader from "../styled_components/header"
import H2 from "../styled_components/H2"

const Header = () => {
  return (
    <StyledHeader>
      <H2>
        <Link to="/">home</Link>
      </H2>
      <H2>
        <div class="disabled">photos</div>
      </H2>
      <H2>
        <div class="disabled">thoughts</div>
      </H2>
      <H2>
        <div class="disabled">jetsam</div>
      </H2>
    </StyledHeader>
  )
}

export default Header
