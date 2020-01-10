import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    };

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value }); 
    };

    handleSubmit = () => {

    };

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        handleChange={this.handleChange} 
                        value={this.state.email} 
                        label='email'
                        required />
                    <FormInput 
                        name='password' 
                        type='password' 
                        handleChange={this.handleChange} 
                        value={this.state.password} 
                        label='password'
                        required />
                </form>

            </div>
        )
    }    
}

export default SignIn;