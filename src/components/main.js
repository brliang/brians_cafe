import React from "react"
import PropTypes from "prop-types"

import Container from "./container"
import Footer from "./footer"
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
              I'm an incoming pebble at{" "}
              <a
                id="rockset"
                href="https://www.rockset.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                Rockset
              </a>
              .
              <br />
              Survived polar vortex at{" "}
              <a
                id="northwestern"
                href="https://www.mccormick.northwestern.edu/computer-science/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Northwestern.{" "}
              </a>
              <br />
              Previous: Expedia,{" "}
              <a
                id="linkedin"
                href="https://www.linkedin.com/in/brian-liang/"
                rel="noopener noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
              , Facebook.
              <br /> <br />
              I intend for this site to shelter an eclectic assortment of my
              thoughts, photos, and all other jetsam. Stay tuned!
              <br /> <br />
              Anyways, please reach out! I promise I'll respond within 24 hours.
            </Paragraph>
          </StyledMain>
          <Footer />
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
