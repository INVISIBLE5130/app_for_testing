import React, {Component} from 'react'
import {Link} from "react-router-dom";
import '../../css/Main.css'

export default class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    onChangeEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    }

    onChangePassword = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    register = () => {
        let email = this.state.email,
            password = this.state.password
        this.props.registerUser(email, password)
    }

    render() {
        return (
            <div className='main-auth'>
                <h1 className='main-auth-title'>
                    Registration
                </h1>

                <input id='email' className='main-auth-input' type="text" placeholder='Enter your email' required
                       onChange={this.onChangeEmail}/>
                <input id='password' className='main-auth-input' type="password" placeholder='Enter your password'
                       required onChange={this.onChangePassword}/>

                <Link to='/login' className='main-auth-toggle'>
                    Already have an account? Login now!
                </Link>

                <button className='main-auth-submit' onClick={this.register}>
                    <Link to="/login" className='main-auth-submit_link'>
                        Registration
                    </Link>
                </button>
            </div>
        )
    }
}