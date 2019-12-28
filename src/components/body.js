import React from "react"

import PropTypes from "prop-types"

import pages from "../constants/global"
import StyledBody from "../styled_components/body"
import Paragraph from "../styled_components/paragraph"
import BrianSVG from "../svg/brian.svg"
import FirstNameSVG from "../svg/firstName.svg"
import LastNameSVG from "../svg/lastName.svg"
import QuillSVG from "../svg/quill.svg"

const Body = ({ pageTitle }) => {
  switch (pageTitle) {
    case pages.INDEX:
      return (
        <StyledBody>
          <h1>Hi and welcome!</h1>
          <BrianSVG id="brian" />
          <Paragraph>
            I'm an incoming pebble, and aspiring rock-star at{" "}
            <a href="https://www.rockset.com" target="_blank">
              Rockset
            </a>
            . Born and raised in amazing New Jersey. Survived many winters at{" "}
            Northwestern University . Previous stunts at Expedia, LinkedIn, and
            Facebook. Big fan of coffee, cafes, food, bakeries, cooking, running, cities,
            nature... Hmmm. Let me know if there's anything else I should write
            here. I implore you to reach out! I promise it won't be a mistake.
            Most all messages are welcome :)
          </Paragraph>
          <div>
            <FirstNameSVG id="first_name" />
            <LastNameSVG id="last_name" />
          </div>
        </StyledBody>
      )
    case pages.THOUGHTS:
      return (
        <StyledBody>
          <h1>Thoughts... Coming soon!</h1>
        </StyledBody>
      )
    default:
      return (
        <StyledBody>
          <h1>Currently under construction</h1>
        </StyledBody>
      )
  }
}

Body.propTypes = {
  pageTitle: PropTypes.string.isRequired,
}

export default Body
