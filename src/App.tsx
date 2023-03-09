import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
// import { DarkModeButton } from './ui/DarkModeButton';
// import { GitHubIconLink } from './ui/GitHubIconLink';
import { globalCss, styled } from './stitches.config';
import { Home } from './components/Home';
import { ExampleComponent } from './components/ExampleComponent';
import { ExampleTwoDeepComponent } from './components/ExampleTwoDeepComponent';
import { SitemapLinkGenerator } from './components/SitemapLinkGenerator';
import { PageNotFound } from './components/PageNotFound';
import { Breadcrumbs } from './components/Breadcrumbs';
// import { Info } from './components/Info';
import { Menu } from './components/Menu';
import { OmMig } from './components/OmMig';
import { Tjanster } from './components/Tjanster';
import { Kontakt } from './components/Kontakt';
import { H1, H2, P, HR } from './ui/TextStyles';
import { InteractiveLink, HomeLink } from './ui/InteractiveLink';
import { EnvelopeClosedIcon } from '@radix-ui/react-icons';

const AppContainer = styled('div', {
  // display: 'grid',
  // gridColumns: '',
  // gridRows: '',
  // maxWidth: '60%',
  // padding: '12px 15px 25px',
  margin: '0 auto',
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

const HeaderContainer = styled('header', {
  // display: 'flex',
  justifyContent: 'space-between',
  // marginBottom: '18px',
  // background: '$backgroundContrast',
  textAlign: 'center',
  alignItems: 'center',
});

// const H1 = styled('h1', {
//   fontSize: '5em',
//   // marginRight: '16px',
//   fontFamily: 'Josefin Sans',
// });

// const H2 = styled('h2', {
//   fontSize: '2em',
//   // marginRight: '16px',
//   fontFamily: 'Josefin Sans',
//   fontWeight: '300',
// });

const HeaderIconContainer = styled('span', {
  width: '78px',
  display: 'inline-flex',
  justifyContent: 'space-between',
  gap: '12px',
});

// const BreadcrumbsNav = styled('nav', {
//   // margin: '18px 0',
//   background: '#c8def4ab',
//   padding: '0.5em'
// });

const MenuNav = styled('nav', {
  background: '#c8def4ab',
  marginBottom: '2%',
  width: '100%',
});

const ContentContainer = styled('div', {
  maxWidth: '60%',
  marginLeft: 'auto',
  marginRight: 'auto',
});

const Footer = styled('footer', {
  background: '#c8def4ab',
  height: '10%',
  marginTop: 'auto',
  width: '100%',
  paddingLeft: '5%',
  paddingRight: '5%',
  // display: 'grid',
  // gridAutoColumns: ''
});

const MailIcon = styled(EnvelopeClosedIcon, {
  boxShadow: '3px 3px',
});

export const App: React.VFC = () => {
  globalCss();

  return (
    <AppContainer>
      <HeaderContainer>
        <HomeLink to="/">
          <H1>JESSICA JACOBSON</H1>
        </HomeLink>

        <HR></HR>
        <H2>SÅNGPEDAGOG</H2>
        <HeaderIconContainer>{/* <DarkModeButton /> */}</HeaderIconContainer>
      </HeaderContainer>

      {/* <BreadcrumbsNav>
        <Breadcrumbs />
      </BreadcrumbsNav> */}
      <MenuNav>
        <Menu />
      </MenuNav>
      <ContentContainer>
        <Switch>
          <Route exact path="/ommig" component={OmMig} />
          {/* <Route exact path="/info" component={Info} /> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/tjanster" component={Tjanster} />
          <Route exact path="/kontakt" component={Kontakt} />
          {/* <Route exact path="/example" component={ExampleComponent} />
        <Route
          exact
          path="/example/two-deep"
          component={ExampleTwoDeepComponent}
        />
        <Route
          exact
          path="/sitemap-link-generator"
          component={SitemapLinkGenerator}
        /> */}
          <Route component={PageNotFound} />
        </Switch>
      </ContentContainer>
      <Footer>
        <P>
          {/* <MailIcon viewBox="0 0 100 100"></MailIcon>  */}
          jessicajmusik@gmail.com
        </P>
        <P>www.jessicajacobson.github.io</P>
        <P>Örebro</P>
      </Footer>
    </AppContainer>
  );
};
