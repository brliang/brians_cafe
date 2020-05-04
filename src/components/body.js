import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import Glossary from "./glossary"
import Footer from "./footer"
import pages from "../constants/global"
import H1 from "../styled_components/h1"
import Brian from "../svg/brian.svg"

const Body = ({ pageData, pageTitle }) => {
  switch (pageTitle) {
    case pages.INDEX:
      return (
        <>
          <H1>
            <Brian id="brian" /> Brian Liang
          </H1>
          <main>
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
              <li>new jersey - northwestern - intern</li>
            </ul>
            This site shelters an eclectic assortment of my
            <Link to="/thoughts/">
              <strong> thoughts</strong>
            </Link>
            ,
            <Link to="/photos/">
              <strong> photos</strong>
            </Link>
            , and all other
            <Link to="/jetsam/">
              <strong> jetsam</strong>
            </Link>
            .
            <br /> <br />
            If you have an inquiry, or want to say hi, feel free to send a
            message! I'll respond within 24 hours.
          </main>
          <Footer />
        </>
      )
    case pages.THOUGHTS:
    case pages.PHOTOS:
    case pages.JETSAM:
    default:
      return (
        <>
          <H1>{pageTitle}</H1>
          <Glossary pageData={pageData} pageTitle={pageTitle} />
        </>
      )
  }
}

Body.propTypes = {
  pageData: PropTypes.object.isRequired,
  pageTitle: PropTypes.string.isRequired,
}

export default Body
