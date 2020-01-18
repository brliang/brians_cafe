import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import Container from "./container"
import Footer from "./footer"
import pages from "../constants/global"
import H1 from "../styled_components/h1"
import Hgroup from "../styled_components/hgroup"
import Li from "../styled_components/li"
import StyledMain from "../styled_components/main"
import Paragraph from "../styled_components/paragraph"
import Ul from "../styled_components/ul"
import Brian from "../svg/brian.svg"

const Main = ({ pageData, pageTitle }) => {
  switch (pageTitle) {
    case pages.INDEX:
      return (
        <>
          <Hgroup>
            <H1>
              <Brian id="brian" /> Brian Liang
            </H1>
          </Hgroup>
          <StyledMain>
            <Paragraph>
              <strong>present:</strong>
              <Ul>
                <Li>
                  swe @{" "}
                  <a
                    id="rockset"
                    href="https://www.rockset.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    rockset
                  </a>
                </Li>
              </Ul>
              <strong>previous: </strong>
              <Ul>
                <Li>
                  intern @ expedia,{" "}
                  <a
                    id="linkedin"
                    href="https://www.linkedin.com/in/brian-liang/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    linkedin
                  </a>
                  , facebook
                </Li>
                <Li>computer science @ northwestern</Li>
              </Ul>
              This site shelters an eclectic assortment of my{" "}
              <Link to="/thoughts/">
                <strong>thoughts</strong>
              </Link>
              , photos, and all other{" "}
              <Link to="/jetsam/">
                <strong>jetsam</strong>
              </Link>
              .
              <br /> <br />
              If you have an inquiry, or want to say hi, feel free to send a
              message! I'll respond within 24 hours.
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
