import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, H5Page, PcPage } from '~/routes';

import './style.scss';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/h5" component={H5Page} />
          <Route path="/pc" component={PcPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

render(<App />, document.getElementById('root'));
