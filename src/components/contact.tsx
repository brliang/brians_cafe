import React from 'react';

import { Button, Input, Textarea, Li, Ul } from '../styled_components/index';

export const Contact = () => (
  <form
    action="/"
    data-netLify="true"
    method="POST"
    name="contact"
    netLify-honeypot="bot-field"
  >
    <Input name="form-name" type="hidden" value="contact" />
    <Ul>
      <Li>
        <Input
          name="name"
          placeholder="name"
          type="text"
          autoComplete="off"
          required={true}
        />
      </Li>
      <Li>
        <Input
          name="email"
          placeholder="email"
          autoComplete="off"
          required={true}
          type="email"
        />
      </Li>
      <Li>
        <Input name="bot-field" type="hidden" />
        <Textarea
          name="message"
          placeholder="message!"
          autoComplete="off"
          required={true}
        />
      </Li>
      <Li>
        <Button type="submit">send</Button>
      </Li>
    </Ul>
  </form>
);
