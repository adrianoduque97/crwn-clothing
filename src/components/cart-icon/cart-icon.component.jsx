import React from 'react'
import {connect} from 'react-redux'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'

import './cart-icon.styles.scss'
import { toggleCurrentCart } from '../../redux/cart/cart.action'

const CartIcon = ({toggleCurrentCart})=>(
    <div className='cart-icon' onClick= { toggleCurrentCart} >
        <ShoppingIcon></ShoppingIcon>
        <span className='item-count'> 0 </span>
    </div>
)
const mapDispatchToProps = dispatch => (
{
    toggleCurrentCart: () => dispatch(toggleCurrentCart())
}
)

// const mapStatateToProps = state =>(

// )
export default connect(null, mapDispatchToProps)(CartIcon);