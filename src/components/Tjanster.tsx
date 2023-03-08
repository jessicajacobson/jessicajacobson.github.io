import * as React from 'react';
import { P } from '../ui/Paragraph';
import { styled } from '../stitches.config';
import { TjanstImg } from '../ui/TjansterUI';

const TjanstGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  gridTemplateRows: '1fr',
  gridGap: '2%',
});

const Button = styled('button', {
  background: 'white',

  ':hover': {
    background: 'red',
  },
  ':active': {
    background: 'blue',
  },
});

// const TjanstImg = styled('img', {
//     width: '100%',

//     '&.hover': {
//         display: 'none',
//     }
// })

const TjanstInfo = styled('div', {
  gridArea: '2 / 1 / 2 / 5',
});

export const Tjanster: React.VFC = () => (
  <div>
    <TjanstGrid>
      <Button>hejhej</Button>
      <TjanstImg src="img/tjänst 1.png" alt="" />
      <TjanstImg src="img/tjänst 2.png" alt="" />
      <TjanstImg src="img/tjänst 3.png" alt="" />
      <TjanstImg src="img/tjänst 4.png" alt="" />
      <TjanstInfo>
        <P>Info</P>
      </TjanstInfo>
    </TjanstGrid>
  </div>
);
