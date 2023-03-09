import * as React from 'react';
import { P, H2, HR } from '../ui/TextStyles';
import { styled } from '../stitches.config';
import { black } from 'color-name';
import { relative } from 'path';

const TjanstGrid = styled('div', {
  display: 'flex',
  flexFlow: 'column',
});

const TjanstBox = styled('div', {
  // display: 'flex',
  // marginTop: '%',
  // marginBottom: '2%',

  '> img': {
    width: '10%',
  },
});

const HR2 = styled('hr', {
  width: '90%',
  height: '1px',
  background: 'black',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginBottom: '2%',
});

const TjanstImgLeft = styled('img', {
  margin: '2%',
  float: 'left',
});

const TjanstImgRight = styled('img', {
  margin: '2%',
  float: 'right',
});

export const Tjanster: React.VFC = () => (
  <div>
    <TjanstGrid>
      <H2>Sångglädje</H2>
      <TjanstBox>
        <TjanstImgLeft src="img/tjänst 1.png" alt="" />
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu sem
          integer vitae justo. Rhoncus mattis rhoncus urna neque viverra justo.
          Tempus egestas sed sed risus pretium. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Eu sem integer vitae justo. Rhoncus
          mattis rhoncus urna neque viverra justo. Tempus egestas sed sed risus
          pretium.
        </P>
      </TjanstBox>
      <HR2></HR2>
      <H2>Förbereda sökning</H2>
      <TjanstBox>
        <TjanstImgRight src="img/tjänst 1.png" alt="" />
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu sem
          integer vitae justo. Rhoncus mattis rhoncus urna neque viverra justo.
          Tempus egestas sed sed risus pretium. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Eu sem integer vitae justo. Rhoncus
          mattis rhoncus urna neque viverra justo. Tempus egestas sed sed risus
          pretium.
        </P>
      </TjanstBox>
      <HR2></HR2>
      <H2>Musikalisk fördjupning</H2>
      <TjanstBox>
        <TjanstImgLeft src="img/tjänst 1.png" alt="" />
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu sem
          integer vitae justo. Rhoncus mattis rhoncus urna neque viverra justo.
          Tempus egestas sed sed risus pretium. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Eu sem integer vitae justo. Rhoncus
          mattis rhoncus urna neque viverra justo. Tempus egestas sed sed risus
          pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu sem
          integer vitae justo. Rhoncus mattis rhoncus urna neque viverra justo.
          Tempus egestas sed sed risus pretium. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Eu sem integer vitae justo. Rhoncus
          mattis rhoncus urna neque viverra justo. Tempus egestas sed sed risus
          pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu sem
          integer vitae justo. Rhoncus mattis rhoncus urna neque viverra justo.
          Tempus egestas sed sed risus pretium. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Eu sem integer vitae justo. Rhoncus
          mattis rhoncus urna neque viverra justo. Tempus egestas sed sed risus
          pretium.
        </P>
      </TjanstBox>
      <HR2></HR2>
    </TjanstGrid>
  </div>
);
