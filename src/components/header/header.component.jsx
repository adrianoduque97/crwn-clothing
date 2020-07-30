import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {connect} from 'react-redux'
import {auth} from '../../firebase/firebase.utils'
import  CartIcon  from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import './header.style.scss'

const Header = ({currentUser, hidden}) =>{

    //const {currentUser} = props
    return(
    <div className='header'>
         <Link to='/'className='logo-container'>
             <Logo className='logo'></Logo>
         </Link>

         <div className="options">
             <Link className='option' to='/shop'>
                 SHOP 
             </Link>

             <Link className='option' to='/shop'>
                 CONTACT 
             </Link>
                 {
                     currentUser? 
                     <div className="option" onClick={()=> auth.signOut()}> SIGN OUT</div> 
                     : 
                     <Link className="option"  to='/signin'>SIGNIN</Link>
                 }
            <CartIcon></CartIcon>
         </div>
         {
             hidden? null : (<CartDropdown></CartDropdown>)
         }

    </div>
    )
}

const mapStateToProps = ({user , cart}) =>({
    currentUser: user.currentUser,
    hidden: cart.hidden
})

export default connect(mapStateToProps)(Header)