import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Choose, List } from '~/routes';

import './style.scss';

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Choose} />
          <Route path="/list" component={List} />
        </Switch>
      </BrowserRouter>
    );
  }
}

render(<App />, document.getElementById('root'));
