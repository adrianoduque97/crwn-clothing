import React, {useEffect, lazy, Suspense} from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux'
import { setCurrentUser } from './redux/user/user.action'
import {selectCurrentUser} from './redux/user/user.selectors'

//import HomePage from './pages/homepage/homepage.component'
//import ShopPage from './pages/shop/shop.component'
//import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
//import CheckOutPage from './pages/checkout/checkout.component'
import Spinner from './components/spinner/spinner.component'
import Header from './components/header/header.component'
import {auth , createUserProfileDocument} from './firebase/firebase.utils'

const ShopPage = lazy (() => import('./pages/shop/shop.component'))
const HomePage = lazy (() => import('./pages/homepage/homepage.component'))
const CheckOutPage = lazy (() => import('./pages/checkout/checkout.component'))
const SignInAndSignUpPage = lazy (() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'))

const  App = ({setCurrentUser, currentUser}) =>{

  useEffect(()=>{
    auth.onAuthStateChanged(async userAuth => {
      
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

  },[setCurrentUser])


    return (
      <div>
        <Header></Header>
        <Switch>
        <Suspense fallback={<Spinner></Spinner>}> 
          <Route exact path='/' component= {HomePage}></Route>        
          <Route exact path="/signin" 
                  render = {
                    ()=>(
                      currentUser ? 
                      (<Redirect to='/'/>):
                      (<SignInAndSignUpPage/>) 
                    )
                  
                  }>         
          </Route>
          <Route path="/shop" component={ShopPage}/>
          <Route exact path='/checkout' component={CheckOutPage}/>
          <Route component={HomePage} ></Route>
          </Suspense>
          
        </Switch>
      </div>
    );
  
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
