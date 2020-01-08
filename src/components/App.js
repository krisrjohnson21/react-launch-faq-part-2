import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import FAQContainer from './FAQContainer'
import LauncherList from './LauncherList';
import LauncherShowPage from './LauncherShowPage'

const App = (props) => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={FAQContainer} />
        <Route exact path="/launchers" component={LauncherList} />
        <Route exact path="/launcher/:id" component={LauncherShowPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
