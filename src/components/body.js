import React from "react"

import PropTypes from "prop-types"

import Container from "./container"
import pages from "../constants/global"
import StyledBody from "../styled_components/body"
import H1 from "../styled_components/h1"
import Paragraph from "../styled_components/paragraph"
import Brian from "../svg/brian.svg"
import FirstName from "../svg/firstName.svg"
import LastName from "../svg/lastName.svg"

const Body = ({ pageData, pageTitle }) => {
  switch (pageTitle) {
    case pages.INDEX:
      return (
        <>
          <H1>Hi and welcome!</H1>
          <StyledBody>
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
        </>
      )
    case pages.FOOD:
    case pages.THOUGHTS:
    default:
      return <Container pageData={pageData} pageTitle={pageTitle} />
  }
}

Body.propTypes = {
  pageTitle: PropTypes.object.isRequired,
  pageTitle: PropTypes.string.isRequired,
}

export default Body
