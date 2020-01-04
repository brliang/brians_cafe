import React from "react"

import PropTypes from "prop-types"

import Container from "./container"
import pages from "../constants/global"
import StyledBody from "../styled_components/body"
import Paragraph from "../styled_components/paragraph"
import Brian from "../svg/brian.svg"
import FirstName from "../svg/firstName.svg"
import LastName from "../svg/lastName.svg"

const Body = ({ pageData, pageTitle }) => {
  switch (pageTitle) {
    case pages.INDEX:
      return (
        <>
          <StyledBody>
            <Brian id="brian" />
            <span>
              <FirstName id="first_name" />
              <LastName id="last_name" />
            </span>
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
              . Born and raised in New Jersey (best state). Survived three
              winters at Northwestern University. Previous stints at Expedia,{" "}
              <a
                id="linkedin"
                href="https://www.linkedin.com/in/brian-liang/"
                rel="noopener noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
              , and Facebook. Big fan of coffee, cafes, bakeries, food, cooking,
              running, cities, nature, photography... Hmmm. Let me know if
              there's anything else I should write here.
              <br /> <br />
              I intend for this site to shelter an eclectic assortment of my
              photos, writings, and stray thoughts. Stay tuned!
              <br /> <br />
              Anyways, please reach out! I promise I'll respond within 24 hours,
              or I owe you a coffee :)
            </Paragraph>
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
  pageData: PropTypes.object.isRequired,
  pageTitle: PropTypes.string.isRequired,
}

export default Body
