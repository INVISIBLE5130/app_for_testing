import React, {Component} from 'react'
import {Link} from "react-router-dom";
import '../../css/Main.css'

export default class Registration extends Component {
    render() {
        return (
            <div className='main-auth'>
                <h1 className='main-auth-title'>
                    Registration
                </h1>

                <input className='main-auth-input' type="text" placeholder='Enter your email'/>
                <input className='main-auth-input' type="text" placeholder='Enter your password'/>

                <Link to='/login' className='main-auth-toggle'>
                    Already have an account? Login now!
                </Link>

                <button className='main-auth-submit'>
                    <Link to="/calculator" className='main-auth-submit_link'>
                        Registration
                    </Link>
                </button>
            </div>
        )
    }
}