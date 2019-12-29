import React from "react"

import PropTypes from "prop-types"

import H2 from "../styled_components/h2"
import H3 from "../styled_components/h3"
import Paragraph from "../styled_components/paragraph"
import Body from "../styled_components/body"

const Post = ({ title, date, content }) => {
  return (
    <Body>
      <H2>{title}</H2>
      <H3>{date}</H3>
      <Paragraph>{content}</Paragraph>
    </Body>
  )
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

export default Post
