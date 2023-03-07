import * as React from 'react';
import { InteractiveLink } from '../ui/InteractiveLink';
// import { Route, RouteComponentProps } from 'react-router-dom';
import { UL, LI } from '../ui/MenuList';
import { styled } from '../stitches.config';

const LinkContainer = styled('span', {
  display: 'block',
  margin: '8px 0',
});

// export const Menu: React.VFC = () => {
//     <div>
//         <ul>
//         <li>
//         <LinkContainer>
//         <InteractiveLink to="/example">Example page</InteractiveLink>
//         </LinkContainer>
//         </li>
//         </ul>

//     </div>
// }

export const Menu: React.VFC = () => (
  <UL>
    <LI>
      <LinkContainer>
        <InteractiveLink to="/tjanster">Tjänster</InteractiveLink>
      </LinkContainer>
    </LI>
    <LI>
      <LinkContainer>
        <InteractiveLink to="/ommig">Om mig</InteractiveLink>
      </LinkContainer>
    </LI>
    <LI>
      <LinkContainer>
        <InteractiveLink to="/kontakt">Kontakt</InteractiveLink>
      </LinkContainer>
    </LI>
  </UL>
);
