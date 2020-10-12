import React, {useState} from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-boton.component'
import {auth, signInWithGoogle } from '../../firebase/firebase.utils'
import './sign-in.styles.scss'

const SignIn = () => {
    // constructor() {
    //     super()

    //     this.state = {
    //         email: '',
    //         password: ''
    //     }
    // }
    const [userCredentials, setCredentials] = useState({email: '' , password: ''})
    const{email, password}= userCredentials

    const handleSubmit = async event => {
        event.preventDefault()

        try{
            await auth.signInWithEmailAndPassword(email,password)
            // this.setState({ email: '', password: '' }
        }catch(e){
            console.log(e)
        }

        
    }

    const handleChange = event => {
        const { value, name } = event.target
        setCredentials({...userCredentials, [name]: value })
    }

        return (
            <div className="sign-in">
                <h2>I have an account</h2>
                <span>Sign IN with email and password</span>

                <form onSubmit={handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        required
                        handleChange={handleChange}
                        label="email" />

                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        required
                        handleChange={handleChange}
                        label="password"
                    />

                    <div className="buttons">
                        <CustomButton type="submit">SIGN IN</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn type="button">
                            {' '}
                        SIGN IN WITH GOOGLE {' '}
                        </CustomButton>
                    </div>

                </form>
            </div>
        )
}

export default SignIn