import React, {Component} from 'react'
import '../../css/Main.css'
import {Link} from "react-router-dom";

export default class Login extends Component {
    render() {
        return (
            <div className='main-auth'>
                <h1 className='main-auth-title'>
                    Login
                </h1>

                <input className='main-auth-input' type="text" placeholder='Enter your email'/>
                <input className='main-auth-input' type="text" placeholder='Enter your password'/>

                <Link to='/registration' className='main-auth-toggle'>
                    Don`t have an account? Register now!
                </Link>

                <button className='main-auth-submit'>
                    <Link to="/calculator" className='main-auth-submit_link'>
                        Login
                    </Link>
                </button>
            </div>
        )
    }
}