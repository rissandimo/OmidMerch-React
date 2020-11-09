import React from 'react';
import './register.css';

import { Button, FormControl, TextField } from '@material-ui/core';

class Register extends React.Component{

    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name] : event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault();
    }
    render(){
        return(
            <div className="register">
                <form onSubmit={this.handleSubmit} className='register__form'>
                    <FormControl>
                        <TextField value={this.state.displayName} label='Full Name' name='displayName' onChange={this.handleChange} />
                    </FormControl>
                    <FormControl>
                        <TextField value={this.state.email} label='Email ' name='email' onChange={this.handleChange} />
                    </FormControl>
                    <FormControl>
                        <TextField value={this.state.password} label='Password' name='password' type='password' onChange={this.handleChange} />
                    </FormControl>
                    <FormControl>
                        <TextField value={this.state.confirmPassword} label='Confirm Password' name='confirmPassword' onChange={this.handleChange} />
                    </FormControl>
                    <Button color='primary' type='submit'>Register</Button>
                </form>
            </div>
        )
    }
}

export default Register;