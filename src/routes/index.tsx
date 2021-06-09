import * as React from 'react';
import { useRoutes, HookRouter } from 'hookrouter';

import Main from './Main';
import Edit from './Edit';

/* eslint-disable react/display-name */
const routes: HookRouter.RouteObject = {
  '/': () => <Main />,
  '/edit/:id': ({ id }) => <Edit id={id} />,
};
/* eslint-enable react/display-name */

// TODO: make a proper 404
export const NotFound: React.FC = () => <div>Not found!</div>;

export const Router: React.FC = () => {
  const route = useRoutes(routes);

  return route || <NotFound />;
};
Router.displayName = 'Router';
