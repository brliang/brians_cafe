import React from "react"

import Layout from "../components/layout"
import pages from "../constants/global"
import "../styles/global.scss"

const Photos = ({ data }) => <Layout pageData={data} pageTitle={pages.PHOTOS} />

export default Photos