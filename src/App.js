import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

import './pages/homepage/homepage.styles.scss';

const Mens = ()=>(
  <div>
    <h1>Welcome to the mens cothing Page</h1>
  </div>
);

function App(){
  return(
    <div>
      <Switch>
        <Route exact path = '/' component = {HomePage} />
        <Route path='/mens' component={Mens}/>
      </Switch>
      {/* <HomePage /> */}
    </div>
  )
}

export default App;
