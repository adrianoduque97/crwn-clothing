import React from 'react'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {connect} from 'react-redux'
import {auth} from '../../firebase/firebase.utils'
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from '../../redux/user/user.selectors'
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import  CartIcon  from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles'

const Header = ({currentUser, hidden}) =>{

    //const {currentUser} = props
    return(
    <HeaderContainer >
         <LogoContainer to='/'>
             <Logo></Logo>
         </LogoContainer>

         <OptionsContainer >
             <OptionLink  to='/shop'>
                 SHOP 
             </OptionLink>

             <OptionLink  to='/shop'>
                 CONTACT 
             </OptionLink>
                 {
                     currentUser? (
                     <OptionLink as="div" onClick={()=> auth.signOut()}> SIGN OUT</OptionLink> 
                     ):(
                     <OptionLink   to='/signin'>SIGNIN</OptionLink>
                     )
                 }
            <CartIcon/>
         </OptionsContainer>
         {
             hidden? null : (<CartDropdown></CartDropdown>)
         }

    </HeaderContainer>
    )
}

const mapStateToProps = (state) => createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)