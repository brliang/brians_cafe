import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import H2 from "../styled_components/h2"
import H3 from "../styled_components/h3"

const Post = ({ date_posted, last_updated, path, title }) => {
  return (
    <Link to={path}>
      <H2>{title}</H2>
      <H3>{date_posted}</H3>
      <H3>{last_updated}</H3>
    </Link>
  )
}

Post.propTypes = {
  date_posted: PropTypes.string.isRequired,
  last_updated: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Post
