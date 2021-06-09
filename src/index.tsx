import * as React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'unistore/react';

import { Router } from '~/routes';
import { GlobalStyles, Theme } from '~/styles';
import { store } from '~/store';

type Props = {
  // ...
};

const App: React.FC<Props> = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Router />
      </ThemeProvider>
    </Provider>
  );
};
App.displayName = 'App';

// start the app
const element = document.getElementById('app');
if (element) {
  render(<App />, element);
}
