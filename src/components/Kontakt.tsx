import * as React from 'react';
import { styled } from '../stitches.config';
import { H1, H2, P } from '../ui/TextStyles';

const FORM = styled('form', {
  maxWidth: '500px',
  margin: '10px auto 10px',
});

const INPUT = styled('input', {
  background: '#c8def4ab',
  padding: '10px',
  marginTop: '10px',
  width: '100%',
  borderRadius: '6px',
});

const TEXTAREA = styled('textarea', {
  background: '#c8def4ab',
  padding: '10px',
  marginTop: '10px',
  width: '100%',
  height: '150px',
  borderRadius: '6px',
});

const BUTTON = styled('button', {
  background: '#c8def4ab',
  padding: '10px',
  marginTop: '10px',
  width: '100%',
  borderRadius: '6px',

  '&.hover': {
    // varför funkar inte hover?
    background: '#E996AC',
    color: 'white',
    boxShadow: '10px',
  },
  //   '&.touchActive, &.keyActive': {
  //     background: '#E996AC',
  //   },

  // '&.after, &.before': {
  //     background: '#E996AC',
  // },
});

export const Kontakt: React.VFC = () => (
  <div>
    <H2>Välkommen att höra av dig!</H2>
    <P>
      {' '}
      Undrar du om jag kan erbjuda sånglektioner som passar dig? Eller om jag
      kan coacha dig inför din ansökan till folkhögskola och musikhögskola?
      Eller vill du diskutera vilken som är den bästa låten i musikalen RENT?
      Hör av dig oavsett! Fyll i formuläret eller skicka ett mejl till _____ .
      Vi hörs!
    </P>
    <FORM action="https://api.web3forms.com/submit" method="POST" id="form">
      <fieldset>
        {/* <legend>Contact Form</legend> */}
        <INPUT
          type="hidden"
          name="access_key"
          value="0d6a1674-9ddd-4feb-9d60-fe2e9d60c651"
        />
        <INPUT
          type="hidden"
          name="subject"
          value="New Submission from Web3Forms"
        />
        <INPUT
          type="hidden"
          name="redirect"
          value="https://web3forms.com/success"
        />
        {/* <INPUT type="checkbox" name="botcheck" id=""  /> */}
        <div>
          <INPUT
            type="text"
            name="name"
            id="name"
            placeholder="Förnamn Efternamn"
            required
          />
        </div>
        <div>
          <INPUT
            name="email"
            id="email"
            placeholder="mejl@adress.se"
            required
          />
        </div>
        {/* <div>
            <INPUT
            type="text"
            name="phone"
            id="phone"
            placeholder="+1 (555) 1234-567"
            required
            />
        </div> */}
        <div>
          <TEXTAREA
            name="message"
            id="message"
            placeholder="Skriv ditt meddelande här..."
            required
          ></TEXTAREA>
        </div>
        <BUTTON type="submit"> Skicka! </BUTTON>
      </fieldset>
    </FORM>
  </div>
);
