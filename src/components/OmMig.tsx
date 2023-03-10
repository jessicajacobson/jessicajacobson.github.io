import * as React from 'react';
import { styled } from '../stitches.config';
import { P } from '../ui/Paragraph';

// const JESSICABILD = styled('div', {
//     background: 'url("/img/jessica.png")',
//     width: '100px',
//     height: '100px',
//     backgroundSize: 'cover',
//     float: 'right',
// })

const CONTENT = styled('div', {
  //   display: 'grid',
  gridAutoColumns: '50% 50%',
  gridAutoRows: '100%',
});

const JESSICABILD = styled('img', {
  //   gridColumn: '2',
  margin: '0% 0% 5% 5%',
  width: '40%',
  float: 'right',
  '@bp3': {
    width: '60%',
  },
  '@bp4': {
    width: '100%',
  },
});

export const OmMig: React.VFC = () => (
  <CONTENT>
    <div>
      <JESSICABILD src="/img/jessica2.png"></JESSICABILD>
      <P>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Eu sem integer vitae
        justo. Rhoncus mattis rhoncus urna neque viverra justo. Tempus egestas
        sed sed risus pretium. Quis vel eros donec ac. Facilisis leo vel
        fringilla est. In dictum non consectetur a. Nunc lobortis mattis aliquam
        faucibus. Rhoncus mattis rhoncus urna neque viverra. Mattis rhoncus urna
        neque viverra justo nec ultrices dui. Et tortor at risus viverra
        adipiscing at in tellus integer. Suspendisse faucibus interdum posuere
        lorem ipsum dolor sit amet. Aliquam sem et tortor consequat id porta.
        Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec
        pretium vulputate. Elit duis tristique sollicitudin nibh sit amet. Risus
        nec feugiat in fermentum posuere urna nec tincidunt. Non nisi est sit
        amet facilisis. Enim nulla aliquet porttitor lacus luctus accumsan
        tortor posuere ac. Massa sapien faucibus et molestie ac feugiat sed
        lectus. Euismod in pellentesque massa placerat duis ultricies lacus.
      </P>
      <P>
        Malesuada nunc vel risus commodo viverra maecenas accumsan. Donec ac
        odio tempor orci dapibus. Eros in cursus turpis massa tincidunt dui ut
        ornare. Et molestie ac feugiat sed lectus vestibulum. Est ullamcorper
        eget nulla facilisi etiam dignissim diam. Ut sem viverra aliquet eget
        sit amet. Volutpat odio facilisis mauris sit amet massa vitae tortor
        condimentum. Metus aliquam eleifend mi in nulla posuere sollicitudin. In
        egestas erat imperdiet sed euismod nisi porta lorem mollis. Et ultrices
        neque ornare aenean euismod elementum.
      </P>
    </div>

    {/* <img src="/img/jessica.png" alt="" /> */}
  </CONTENT>
);
