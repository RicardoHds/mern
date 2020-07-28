import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HolidaysList from './HolidaysList/holidaysList';

function App() {

  return (
    <div>
      <Switch>
        <Route path="/">
          <HolidaysList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
