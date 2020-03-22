import React from 'react';
import Profile from './features/Profile/';
import JobList from './features/JobList/';
import JobDetail from './features/JobDetail/';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Profile />
        </Route>
        <Route exact path="/jobs">
          <JobList />
        </Route>
        <Route path="/jobs/:id">
          <JobDetail />
        </Route>
        <Route path="*">
          Not found
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
