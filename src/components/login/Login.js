import React from 'react';
import './login.css';

import { Button, FormControl, TextField } from '@material-ui/core';

class Login extends React.Component{

    constructor(){
        super();

        this.state = {
            email: '',
            password: ''
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();


        this.setState({
            email: '',
            password: ''
        })
    }


    render(){

        return(
            <div className="login">
                <form onSubmit={this.handleSubmit} className='login__form'>
                    <FormControl>
                        <TextField value={this.state.email} label='Email' name='email' onChange={this.handleChange} />
                    </FormControl>
                    <FormControl>
                        <TextField value={this.state.password} label='Password' name='password' type='password' onChange={this.handleChange} />
                    </FormControl>
                    <Button color='primary' type='submit'>Login</Button>
                </form>
            </div>
        )
    }
}

export default Login;