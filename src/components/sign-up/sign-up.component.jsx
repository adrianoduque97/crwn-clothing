import React, {useState} from 'react'
import FormImput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-boton.component'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'


const SignUp = () =>{
 
    const [userInformation, setInformation] = useState({displayName:'', email:'', password:'', confirmPassword:''})
    const { displayName, email, password, confirmPassword } = userInformation

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (password !== confirmPassword) {
            alert("Passwords don't match")
            return
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user, { displayName })
            setInformation({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''

            })  
        } catch (e) {
            console.log(e)
        }
    }

    const handleChange = event =>{
        const {name, value} = event.target
        setInformation({...userInformation,[name]:value})
    }

        return (
            <div className="sig-up">
                <h2 className="title">
                    Idont have an account
                </h2>
                <span>sign up with email and password</span>
                <form action="" className="sign-up-form" onSubmit={handleSubmit}>

                    <FormImput
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={handleChange}
                        label='Display Name'
                        required
                    />
                    <FormImput
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        label='Email'
                        required
                    />
                    <FormImput
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        label='Password'
                        required
                    />
                    <FormImput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={handleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        )
}

export default SignUp