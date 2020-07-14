import React from 'react'

import './sign-in.styles.scss'

class SignIn  extends React.Component{
    constructor(){
        super()

        this.state ={
            email: '',
            password: ''
        }
    }

    handleSubmit = event =>{
        event.preventDefault()

        this.setState({email:'', password:''})
    }

    handleChange = event =>{
         const {value, name}= event.target

         this.setState({[name]: value})
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I have an account</h2>
                <span>Sign IN with email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <input type="email" name="email" value={this.state.email} required onChange={this.handleChange}/>
                    <label htmlFor="">Email</label>

                    <input type="password" name="password" value={this.state.password} required onChange={this.handleChange}/>
                    <label htmlFor="">Password</label>

                    <input type="submit" value="Submit Form"/>
                </form>
            </div>
        )
    }
}

export default SignIn