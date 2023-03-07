import * as React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import { InteractiveLink } from '../ui/InteractiveLink';

interface menuTitlesInterface {
  [key: string]: string | undefined;
}

const menuTitles: menuTitlesInterface = {
  ommig: 'Om mig',
  tjanster: 'Tjänster',
  kontakt: 'Kontakt',
};

const menuItem: React.VFC<RouteComponentProps> = ({ match }) => {
  const path =
    match.url.length > 1 && match.url[match.url.length - 1] === '/'
      ? match.url.slice(0, -1)
      : match.url;
  const title = menuTitles[path.split('/').slice(-1)[0]];
  const to = title === undefined ? '/' : path;

  return (
    <span>
      <InteractiveLink to={to}>{title || 'Page Not Found'}</InteractiveLink>
      {!match.isExact && title && ' / '}
      {title && (
        <Route
          path={`${match.url === '/' ? '' : match.url}/:path`}
          component={menuItem}
        />
      )}
    </span>
  );
};

export const Menu: React.VFC = () => <Route path="/" component={menuItem} />;
