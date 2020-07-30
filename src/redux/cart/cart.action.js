import { CartActionTypes } from './cart.types'

export const toggleCurrentCart = user => (
    {
        type: CartActionTypes.TOOGLE_CART_HIDDEN,
        payload: user
    }
)