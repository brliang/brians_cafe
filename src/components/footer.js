import React from "react"

import Contact from "./contact"
import StyledFooter from "../styled_components/footer"
import H3 from "../styled_components/h3"
import Coffee from "../svg/coffee.svg"

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <Contact />
        <H3>
          designed + coded, with&nbsp;<Coffee id="coffee" />
        </H3>
      </StyledFooter>
    </>
  )
}

export default Footer
