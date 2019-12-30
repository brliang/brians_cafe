import React from "react"

import Button from "../styled_components/button"
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
      <input type="hidden" name="form-name" value="contact" />
      <Ul>
        <Li>
          <Input type="text" name="name" placeholder="name" required="true" />
        </Li>
        <Li>
          <Input
            type="email"
            name="email"
            placeholder="email"
            required="true"
          />
        </Li>
        <Li>
          <input type="hidden" name="bot-field" />
          <Textarea name="message" placeholder="message" required="true" />
        </Li>
        <Li>
          <Button type="submit">send</Button>
        </Li>
      </Ul>
    </form>
  )
}

export default Contact
