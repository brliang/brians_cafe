import React from "react"

import Button from "../styled_components/button"
import Input from "../styled_components/input"
import Textarea from "../styled_components/textarea"

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
      <ul>
        <li>
          <Input name="name" placeholder="name" type="text" required="true" />
        </li>
        <li>
          <Input
            name="email"
            placeholder="email"
            required="true"
            type="email"
          />
        </li>
        <li>
          <Input name="bot-field" type="hidden" />
          <Textarea name="message" placeholder="message" required="true" />
        </li>
        <li>
          <Button type="submit">send</Button>
        </li>
      </ul>
    </form>
  )
}

export default Contact
