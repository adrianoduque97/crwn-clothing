import React from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux'
import { setCurrentUser } from './redux/user/user.action'
import {selectCurrentUser} from './redux/user/user.selectors'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import CheckOutPage from './pages/checkout/checkout.component'
import Header from './components/header/header.component'
import {auth , createUserProfileDocument} from './firebase/firebase.utils'


class  App extends React.Component{

  
  unsuscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props

    this.unsuscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)
       
        userRef.onSnapshot(snapShot =>{
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })

        })
      }
      setCurrentUser(userAuth)
    })
  }

  componentWillUnmount(){
    this.unsuscribeFromAuth()
  }

  render()
  {
    return (
      <div>
        <Header></Header>
        <Switch>
          <Route exact path='/' component= {HomePage}></Route>
          <Route exact path="/signin" 
                  render = {
                    ()=>(
                      this.props.currentUser ? 
                      (<Redirect to='/'/>):
                      (<SignInAndSignUpPage/>) 
                    )
                  
                  }>
          </Route>
          <Route path="/shop" component={ShopPage}/>
          <Route exact path='/checkout' component={CheckOutPage}/>
          <Route component={HomePage} ></Route>
          
        </Switch>
      </div>
    );
  }
  
}

const mapStateToProps = (state) =>(
  {
    currentUser: selectCurrentUser(state)
  }
)

const mapDispatchToProps = dispatch =>(
  {
    setCurrentUser : user => dispatch(setCurrentUser(user))
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
