import React from "react"

import Contact from "./contact"
import StyledFooter from "../styled_components/footer"
import H3 from "../styled_components/h3"

const Footer = () => {
  return (
    <>
      <Contact />
      <StyledFooter>
        <H3>designed + coded by me (with gatsby!)</H3>
      </StyledFooter>
    </>
  )
}

export default Footer
