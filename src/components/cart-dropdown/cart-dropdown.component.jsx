import React from 'react'
import './cart-dropdown.styles.scss'
import CustomButton from '../custom-button/custom-boton.component'
import { connect } from 'react-redux'
import CartItem from '../cart-item/cart-item.components'

const CartDropdown = ({cartItems}) => (

    <div className="cart-dropdown" >
        <div className="cart-items">
            {
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}></CartItem>)
            }
        </div>
        <CustomButton>GO TO CHECKOUT </CustomButton>
    </div>
)

const mapStateToProps = ({cart})=>(
    {
        hidden: cart.hidden,
        cartItems: cart.cartItems
    }
)

export default connect(mapStateToProps)(CartDropdown)