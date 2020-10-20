import React from 'react'
import {CustomButtonContainer} from './custombutton.styles';

const CustomButton =(props) =>(
    <CustomButtonContainer {...props}>
        {props.children}
    </CustomButtonContainer>
)

export default CustomButton