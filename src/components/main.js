import React from "react"
import { Link } from "gatsby"
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
            <H1>
              <Brian id="brian" /> Brian Liang
            </H1>
          </Hgroup>
          <StyledMain>
            <Paragraph>
              <strong>present:</strong>
              <ul>
                <li>
                  swe @{" "}
                  <a
                    id="rockset"
                    href="https://www.rockset.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    rockset
                  </a>
                </li>
              </ul>
              <strong>past: </strong>
              <ul>
                <li>
                  interned: [expedia,{" "}
                  <a
                    id="linkedin"
                    href="https://www.linkedin.com/in/brian-liang/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    linkedin
                  </a>
                  , facebook]
                </li>
                <li>northwestern - computer science</li>
              </ul>
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
