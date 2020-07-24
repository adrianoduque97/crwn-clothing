import React from 'react'
import FormImput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-boton.component'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'


class SignUp extends React.Component {
    constructor() {
        super()

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }

    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const { displayName, email, password, confirmPassword } = this.state
        if (password !== confirmPassword) {
            alert("Passwords don't match")
            return
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user, { displayName })

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''

            })
        } catch (e) {
            console.log(e)
        }


    }

    handleChange = event =>{
        const {name, value} = event.target
        this.setState({[name]:value})
    }


    render() {
        const { displayName, email, password, confirmPassword } = this.state
        return (
            <div className="sig-up">
                <h2 className="title">
                    Idont have an account
                </h2>
                <span>sign up with email and password</span>
                <form action="" className="sign-up-form" onSubmit={this.handleSubmit}>

                    <FormImput
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />
                    <FormImput
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormImput
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormImput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp