import React from 'react'
import {connect} from 'react-redux'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'

import './cart-icon.styles.scss'
import { toggleCurrentCart } from '../../redux/cart/cart.action'
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'

const CartIcon = ({toggleCurrentCart, itemCount})=>(
    <div className='cart-icon' onClick= { toggleCurrentCart} >
        <ShoppingIcon className='shopping-icon'></ShoppingIcon>
        <span className='item-count'> {itemCount} </span>
    </div>
)
const mapDispatchToProps = dispatch => (
{
    toggleCurrentCart: () => dispatch(toggleCurrentCart())
}
)

const mapStatateToProps = (state) =>(
    {
        itemCount : selectCartItemsCount(state)
    }
)
export default connect(mapStatateToProps, mapDispatchToProps)(CartIcon);