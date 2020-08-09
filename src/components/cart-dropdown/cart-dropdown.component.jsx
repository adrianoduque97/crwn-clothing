import React from 'react'
import './cart-dropdown.styles.scss'
import CustomButton from '../custom-button/custom-boton.component'
import { connect } from 'react-redux'
import CartItem from '../cart-item/cart-item.components'
import {selectCartItems} from '../../redux/cart/cart.selectors'
import { toggleCurrentCart } from '../../redux/cart/cart.action'
import {withRouter} from 'react-router-dom'

const CartDropdown = ({cartItems, history, dispatch}) => (

    <div className="cart-dropdown" >
        <div className="cart-items">
            {
                cartItems.length ?
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}></CartItem>):
                <span className='empty'>Your Cart is Empty</span>
                
            }
        </div>
        <CustomButton onClick={
            ()=>{
             history.push("/checkout")
             dispatch(toggleCurrentCart())
             }}
        >GO TO CHECKOUT </CustomButton>
    </div>
)

const mapStateToProps = (state)=>(
    {
        cartItems: selectCartItems(state)
    }
)

export default withRouter(connect(mapStateToProps)(CartDropdown))