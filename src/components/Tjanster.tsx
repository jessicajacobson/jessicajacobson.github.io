import * as React from 'react';
import { P } from '../ui/Paragraph';
import { styled } from '../stitches.config';
import { black } from 'color-name';
// import { TjanstImg } from '../ui/TjansterUI';

const TjanstInfo = styled('div', {
  gridArea: '3 / 1 / 2 / 5',
});

const TjanstGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridTemplateRows: '1fr 1fr',
  gridGap: '2%',
});

// const TestDiv = styled('div', {
//     height: '100px',
//     width: '100px',
//     border: '2px black',
//     backgroundColor: 'black',

//     '@bp1': {
//         backgroundColor: 'red',
//         '&:hover': {
//             display: 'none',
//         }
//     },
//     '@bp2': {
//         backgroundColor: 'green',

//     },
//     '@bp3': {
//         backgroundColor: 'blue',
//     },
//     '@bp4': {
//         backgroundColor: 'purple',
//     },
// })

// const Button = styled('button', {
//   background: 'white',

//   ':hover': {
//     background: 'red',
//   },
//   ':active': {
//     background: 'blue',
//   },
// });

// const Icon = styled('svg', {
//     display: 'inline-block',
//     marginLeft: '5px',
//     width: '16px',
//   });

const Test2 = styled('div', {
  // base styles

  ['& ${TjanstInfo}']: {
    marginLeft: '5px',
  },
  background: 'green',
});

const TjanstText = styled(P, {
  display: 'none',

  // ':&hover': {
  //     display: 'block'
  // }
});

const TjanstDiv1 = styled('div', {
  gridArea: '1 / 1 / 1 / 1',
  backgroundColor: 'red',

  // [`& ${TjanstText}`]: {
  //     marginLeft: '5px',
  //   },

  '> img': {
    marginLeft: '25%',
    width: '70%',
  },

  ' > img': {
    [`&:hover ~ ${TjanstText}`]: {
      display: 'block',
    },
  },
});

// const TjanstDiv2 = styled('div', {
//     gridArea: '1 / 2 / 1 / 2',
//     backgroundColor: 'yellow',

//     '> img': {
//         width: {
//             bp1: '70%',
//             bp2: '40%',
//             bp3: '10%',
//         },
//         marginRight: '25%',
//     }
//   });

//   const TjanstDiv3 = styled('div', {
//     gridArea: '2 / 1 / 2 / 1',
//     backgroundColor: 'green',

//     '> img': {
//         width: '70%',
//         marginLeft: '25%',
//     }
//   });

//   const TjanstDiv4 = styled('div', {
//     gridArea: '2 / 2 / 2 / 2',
//     backgroundColor: 'blue',

//     '> img': {
//         width: '70%',
//         marginRight: '25%',
//     }
//   });

// const TjanstImg = styled('img', {
//     width: '100%',

//     '&.hover': {
//         display: 'none',
//     }
// })

export const Tjanster: React.VFC = () => (
  <div>
    <TjanstText>hejsvejs på dejs med brejs</TjanstText>
    {/* <TestDiv></TestDiv> */}
    {/* <Button>hej</Button> */}
    <TjanstGrid>
      <TjanstDiv1>
        <img src="img/tjänst 1.png" alt="" />
        <TjanstText>hejsvejs på dejs med brejs</TjanstText>
      </TjanstDiv1>
      {/* <TjanstDiv2><img src="img/tjänst 2.png" alt="" /></TjanstDiv2>
      <TjanstDiv3><img src="img/tjänst 3.png" alt="" /></TjanstDiv3>
      <TjanstDiv4><img src="img/tjänst 4.png" alt="" /></TjanstDiv4> */}
      {/* <TjanstImg src="img/tjänst 2.png" alt="" />
      <TjanstImg src="img/tjänst 3.png" alt="" />
      <TjanstImg src="img/tjänst 4.png" alt="" /> */}
      <TjanstInfo>
        <P>Info</P>
      </TjanstInfo>
    </TjanstGrid>
  </div>
);
