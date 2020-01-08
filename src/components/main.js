import React from "react"
import PropTypes from "prop-types"

import Container from "./container"
import pages from "../constants/global"
import H1 from "../styled_components/h1"
import Hgroup from "../styled_components/hgroup"
import StyledMain from "../styled_components/main"
import Paragraph from "../styled_components/paragraph"
import Brian from "../svg/brian.svg"

const Main = ({ pageData, pageTitle }) => {
  switch (pageTitle) {
    case pages.INDEX:
      return (
        <>
          <Hgroup>
            <H1>Hi there! I'm Brian</H1>
          </Hgroup>
          <StyledMain>
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
              thoughts, photos, and all other jetsam. Stay tuned!
              <br /> <br />
              Anyways, please reach out! I promise I'll respond within 24 hours,
              or I owe you a coffee :)
            </Paragraph>
          </StyledMain>
        </>
      )
    case pages.THOUGHTS:
    case pages.PHOTOS:
    case pages.JETSAM:
    default:
      return (
        <>
          <Hgroup>
            <H1>{pageTitle}</H1>
          </Hgroup>
          <StyledMain>
            <Container pageData={pageData} pageTitle={pageTitle} />
          </StyledMain>
        </>
      )
  }
}

Main.propTypes = {
  pageData: PropTypes.object.isRequired,
  pageTitle: PropTypes.string.isRequired,
}

export default Main
