import * as React from 'react';
import { P } from '../ui/Paragraph';
import { styled } from '../stitches.config';
import { black } from 'color-name';
import { relative } from 'path';
// import { TjanstImg } from '../ui/TjansterUI';

const TjanstInfo = styled('div', {
  gridArea: '3 / 1 / 2 / 5',
});

const TjanstGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '200px 200px',
  gridTemplateRows: '200px 200px',
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

// const Test2 = styled('div', {
//   // base styles

//   ['& ${TjanstInfo}']: {
//     marginLeft: '5px',
//   },
//   background: 'green',
// });

const TjanstTitle = styled('h2', {
  display: 'block',
  fontSize: 'medium',
  position: 'absolute',
  bottom: '10%',
  left: '10%',
  right: '10%',
  top: '10%',
});

const TjanstText = styled(P, {
  display: 'none',
  position: 'absolute',
  bottom: '10%',
  left: '10%',
  right: '10%',
  top: '10%',

  // ':&hover': {
  //     display: 'block'
  // }
});

const TjanstDiv1 = styled('div', {
  position: 'relative',
  textAlign: 'center',
  gridArea: '1 / 1 / 1 / 1',
  //   backgroundColor: 'red',

  '> img': {
    width: '100%',
  },

  ' > img': {
    [`&:hover ~ ${TjanstText}`]: {
      display: 'block',
    },
    [`&:hover ~ ${TjanstTitle}`]: {
      display: 'none',
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
    {/* <TestDiv></TestDiv> */}
    {/* <Button>hej</Button> */}
    <TjanstGrid>
      <TjanstDiv1>
        <img src="img/tjänst 1.png" alt="" />
        <TjanstText>
          Är det dags att söka folkhögskola eller musikhögskola? Tillsammans kan
          vi se till att du är maximalt förberedd.
        </TjanstText>
        <TjanstTitle>Förberedelse till sökning</TjanstTitle>
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
