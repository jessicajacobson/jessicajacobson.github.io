import * as React from 'react';
import { P } from '../ui/Paragraph';

export const Kontakt: React.VFC = () => (
  <form action="https://api.web3forms.com/submit" method="POST" id="form">
    <fieldset>
      <legend>Contact Form</legend>
      <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
      <input
        type="hidden"
        name="subject"
        value="New Submission from Web3Forms"
      />
      <input
        type="hidden"
        name="redirect"
        value="https://web3forms.com/success"
      />
      <input type="checkbox" name="botcheck" id="" />
      <div>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="John Doe"
          required
        />
      </div>
      <div>
        <input name="email" id="email" placeholder="you@company.com" required />
      </div>
      <div>
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="+1 (555) 1234-567"
          required
        />
      </div>
      <div>
        <textarea
          name="message"
          id="message"
          placeholder="Your Message"
          required
        ></textarea>
      </div>
      <button type="submit"> Send Message </button>
    </fieldset>
  </form>
);
