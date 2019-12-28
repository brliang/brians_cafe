import React from "react"

import PropTypes from "prop-types"

import pages from "../constants/global"
import StyledBody from "../styled_components/body"
import H1 from "../styled_components/h1"
import Paragraph from "../styled_components/paragraph"
import Brian from "../svg/brian.svg"
import FirstName from "../svg/firstName.svg"
import LastName from "../svg/lastName.svg"

const Body = ({ pageTitle }) => {
  switch (pageTitle) {
    case pages.INDEX:
      return (
        <StyledBody>
          <H1>Hi and welcome!</H1>
          <Brian id="brian" />
          <Paragraph>
            I'm an incoming pebble, and aspiring rock-star at{" "}
            <a
              id="rockset"
              href="https://www.rockset.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Rockset
            </a>
            . Born and raised in amazing New Jersey. Survived many winters at{" "}
            Northwestern University . Previous stunts at Expedia,{" "}
            <a
              id="linkedin"
              href="https://www.linkedin.com/in/brian-liang/"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
            , and Facebook. Big fan of coffee, cafes, food, bakeries, cooking,
            running, cities, nature... Hmmm. Let me know if there's anything
            else I should write here. I implore you to reach out! I promise it
            won't be a mistake. Most all messages are welcome :)
          </Paragraph>
          <div>
            <FirstName id="first_name" />
            <LastName id="last_name" />
          </div>
        </StyledBody>
      )
    case pages.FOOD:
      return (
        <StyledBody>
          <H1>Food for Thought... Coming soon!</H1>
        </StyledBody>
      )
    case pages.THOUGHTS:
      return (
        <StyledBody>
          <H1>Thoughts... Coming soon!</H1>
        </StyledBody>
      )
    default:
      return (
        <StyledBody>
          <H1>Currently under construction</H1>
        </StyledBody>
      )
  }
}

Body.propTypes = {
  pageTitle: PropTypes.string.isRequired,
}

export default Body
