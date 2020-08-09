import React from 'react';
import './checkot-item.styles.scss'
import {clearItemFromCart} from '../../redux/cart/cart.action'
import { addItem, removeItem } from '../../redux/cart/cart.action'
import {connect} from 'react-redux'

const CheckOutItem = ({cartItem, clearItemFromCart, addItem, removeItem}) => {
    const {name, imageUrl, price, quantity} = cartItem
    return(
        <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt='item'/>
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div className="arrow" onClick={()=> removeItem(cartItem) }> &#10094;</div>
            <span className='value'>{quantity}</span>
            <div className="arrow" onClick={()=> addItem(cartItem) }> &#10095;</div>
        </span>
        <span className="price">{price}</span>
        <div className="remove-button" onClick={() => clearItemFromCart(cartItem)}>
        &#10005;
        </div>
    </div>
    )
}

const mapDispatchToProps = dispatch => (
    {
        clearItemFromCart : (item)=> dispatch(clearItemFromCart(item)),
        addItem: (item) => dispatch(addItem(item)),
        removeItem : (item)=> dispatch(removeItem(item))
    }
)


export default connect(null, mapDispatchToProps)(CheckOutItem)