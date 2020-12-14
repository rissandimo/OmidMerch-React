import React from 'react';
import './login.css';

import { auth, signInWithGoogle } from '../../firebase/firebase';

// Material UI
import { Button, FormControl, TextField } from '@material-ui/core';

import { Link } from 'react-router-dom';

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

        const { email, password } = this.state;

        auth.signInWithEmailAndPassword(email, password)
        .catch((error) => {
            console.log('Unable to sign in user: ', error);
        })

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
                    <button onClick={signInWithGoogle}>Sign In With Google</button>
                </form>

                <div className="login__createAccount">
                    <p>Don't have an account? </p>
                    <Link to='/register' className='register__link'>Create an account</Link>
                </div>
            </div>
        )
    }
}

export default Login;