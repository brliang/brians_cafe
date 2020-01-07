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
      data-netlify="true"
      method="POST"
      name="contact"
      netlify-honeypot="bot-field"
    >
      <Input name="form-name" type="hidden" value="contact" />
      <Ul>
        <Li>
          <Input name="name" placeholder="name" type="text" required="true" />
        </Li>
        <Li>
          <Input
            name="email"
            placeholder="email"
            required="true"
            type="email"
          />
        </Li>
        <Li>
          <Input name="bot-field" type="hidden" />
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
