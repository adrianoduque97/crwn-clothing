import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';

import HomePage from './components/pages/homepage/homepage.component'

const Hats = () =>(
  <div>
    <h1>HATS</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component= {HomePage}></Route>
        <Route path="/shop/hats" component={Hats}/>
      </Switch>
    </div>
  );
}

export default App;
