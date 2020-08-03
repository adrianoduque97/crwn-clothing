import React from 'react'
import {connect} from 'react-redux'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'

import './cart-icon.styles.scss'
import { toggleCurrentCart } from '../../redux/cart/cart.action'

const CartIcon = ({toggleCurrentCart, itemCount})=>(
    <div className='cart-icon' onClick= { toggleCurrentCart} >
        <ShoppingIcon></ShoppingIcon>
        <span className='item-count'> {itemCount} </span>
    </div>
)
const mapDispatchToProps = dispatch => (
{
    toggleCurrentCart: () => dispatch(toggleCurrentCart())
}
)

const mapStatateToProps = ({cart}) =>(
    {
        itemCount : cart.cartItems.reduce((accumulator, currentElement)=> accumulator+ currentElement.quantity,0)
    }
)
export default connect(mapStatateToProps, mapDispatchToProps)(CartIcon);