import React from 'react';
import './register.css';

// Firebase
import { auth, createUserProfileDocument } from '../../firebase/firebase';

// Material UI
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

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;
        
        // confirm passwords match
        if(password !== confirmPassword){
            alert("Passwords don't match");
            return;
        }

        try{
            // register user in authentication table -- email/password
            const { user } = auth.createUserWithEmailAndPassword(email, password)
            .function((error) => {
                console.log('Unable to create user: ', error);
            });

            // add user info to firestore
            await createUserProfileDocument(user, { displayName });

            // clear form
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''  
            });
        } catch(error){
            console.log(error);
        }

    }
    render(){
        
        const { displayName, email, password, confirmPassword} = this.state;
        return(
            <div className="register">
                <form onSubmit={this.handleSubmit} className='register__form'>
                    <FormControl>
                        <TextField value={displayName} label='Full Name ' name='displayName' onChange={this.handleChange} />
                    </FormControl>
                    <FormControl>
                        <TextField value={email} label='Email ' name='email' onChange={this.handleChange} />
                    </FormControl>
                    <FormControl>
                        <TextField value={password} label='Password' name='password' type='password' onChange={this.handleChange} />
                    </FormControl>
                    <FormControl>
                        <TextField value={confirmPassword} label='Confirm Password' name='confirmPassword' type='password' onChange={this.handleChange} />
                    </FormControl>
                    <Button color='primary' type='submit'>Register</Button>
                </form>
            </div>
        )
    }
}

export default Register;