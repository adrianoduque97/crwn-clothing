import React from 'react'

import './custom-boton.styles.scss'

const CustomButton =({children, ...otherProps}) =>(
    <button className='custom-button' {...otherProps}>
        {children}
    </button>
)

export default CustomButton