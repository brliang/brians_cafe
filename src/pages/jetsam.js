import React from "react"

import Layout from "../components/layout"
import pages from "../constants/global"
import "../styles/global.scss"

const Jetsam = ({ data }) => <Layout pageData={data} pageTitle={pages.JETSAM} />

export default Jetsam