import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';

import HomePage from './components/pages/homepage/homepage.component'
import ShopPage from './components/pages/shop/shop.component'
import Header from './components/header/header.component'

function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path='/' component= {HomePage}></Route>
        <Route path="/shop/" component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
