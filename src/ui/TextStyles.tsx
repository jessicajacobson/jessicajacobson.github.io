import { styled } from '../stitches.config';

export const P = styled('p', {
  margin: '20px 0',
  lineHeight: '1.4',
  fontFamily: 'Roboto Condensed',
});

export const H1 = styled('h1', {
  fontSize: '340%',
  fontFamily: 'Josefin Sans',
  '@bp3': {
    fontSize: '275%',
  },
});

export const H2 = styled('h2', {
  fontSize: '1.7em',
  fontFamily: 'Josefin Sans',
  fontWeight: '300',
  textAlign: 'center',
  marginBottom: '1%',
  marginTop: '3%',
  '@bp4': {
    fontSize: '1.2em',
    marginTop: '5%',
  },
});

export const HR = styled('hr', {
  backgroundColor: 'black',
  height: '2px',
  marginLeft: '25%',
  marginRight: '25%',
  marginTop: '1%',
  marginBottom: '1.2%',
});
