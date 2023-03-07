import * as React from 'react';
import { InteractiveLink } from '../ui/InteractiveLink';
import { P, H2 } from '../ui/TextStyles';
import { styled } from '../stitches.config';

const LinkContainer = styled('span', {
  display: 'block',
  margin: '8px 0',
});

const RepoReadmeLink: React.VFC = () => (
  <InteractiveLink href="https://github.com/rafgraph/spa-github-pages#readme">
    repo readme
  </InteractiveLink>
);

const SingingImg = styled('img', {
  maxWidth: '100%',
});

export const Home: React.VFC = () => (
  <div>
    <H2> Vill du lära dig att sjunga? Välkommen på sånglektion!</H2>
    <SingingImg
      src="img/singers2.jpg"
      alt="Image by <a href='https://pixabay.com/users/stocksnap-894430/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2606347'>StockSnap</a> from <a href='https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2606347'>Pixabay</a>"
    ></SingingImg>
    <P>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Eu sem integer vitae
      justo. Rhoncus mattis rhoncus urna neque viverra justo. Tempus egestas sed
      sed risus pretium. Quis vel eros donec ac. Facilisis leo vel fringilla
      est. In dictum non consectetur a. Nunc lobortis mattis aliquam faucibus.
      Rhoncus mattis rhoncus urna neque viverra. Mattis rhoncus urna neque
      viverra justo nec ultrices dui. Et tortor at risus viverra adipiscing at
      in tellus integer. Suspendisse faucibus interdum posuere lorem ipsum dolor
      sit amet. Aliquam sem et tortor consequat id porta. Egestas egestas
      fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate.
      Elit duis tristique sollicitudin nibh sit amet. Risus nec feugiat in
      fermentum posuere urna nec tincidunt. Non nisi est sit amet facilisis.
      Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac.
      Massa sapien faucibus et molestie ac feugiat sed lectus. Euismod in
      pellentesque massa placerat duis ultricies lacus.
    </P>
  </div>
);
