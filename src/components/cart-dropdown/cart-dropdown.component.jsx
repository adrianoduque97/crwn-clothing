import React from 'react'
import './cart-dropdown.styles.scss'
import CustomButton from '../custom-button/custom-boton.component'
import { connect } from 'react-redux'

const CartDropdown = () => (

    <div className="cart-dropdown" >
        <div className="cart-items"></div>
        <CustomButton>GO TO CHECKOUT </CustomButton>
    </div>
)

const mapStateToProps = ({cart})=>(
    {
        hidden: cart.hidden
    }
)

export default connect(mapStateToProps)(CartDropdown)