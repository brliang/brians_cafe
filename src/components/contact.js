import React from "react"

import Submit from "../styled_components/submit"
import Input from "../styled_components/input"
import Li from "../styled_components/li"
import Textarea from "../styled_components/textarea"
import Ul from "../styled_components/ul"

const Contact = () => {
  return (
    <form
      action="/"
      name="contact"
      method="POST"
      netlify-honeypot="bot-field"
      data-netlify="true"
    >
      <Ul>
        <Li>
          <Input type="text" name="name" placeholder="name" />
        </Li>
        <Li>
          <Input type="email" name="email" placeholder="email" />
        </Li>
        <Li>
          <input type="hidden" name="bot-field" />
          <Textarea name="message" placeholder="message" />
        </Li>
        <Li>
          <Submit type="submit">send</Submit>
        </Li>
      </Ul>
    </form>
  )
}

export default Contact
