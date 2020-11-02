import React, {Component} from 'react'
import '../../css/Main.css'
import {Link} from "react-router-dom";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            data: false
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

    checkEmail = () => {
        if (
            this.state.email === this.props.email &&
            this.state.password === this.props.password
        ) {
            this.setState({
                data: true
            })
        } else {
            this.setState({
                data: false
            })
        }
    }

    render() {
        const {data} = this.state

        return (
            <div className='main-auth'>
                <h1 className='main-auth-title'>
                    Login
                </h1>

                {
                    data
                        ? null
                        : <p>User not found</p>
                }

                <input id='email' className='main-auth-input' type="text" placeholder='Enter your email' required
                       onChange={this.onChangeEmail}/>
                <input id='password' className='main-auth-input' type="password" placeholder='Enter your password'
                       required onChange={this.onChangePassword}/>

                <Link to='/registration' className='main-auth-toggle'>
                    Don`t have an account? Register now!
                </Link>

                <button className='main-auth-submit' onClick={this.checkEmail}>
                    {
                        data
                            ? <Link to="/calculator" className='main-auth-submit_link'>
                                Login
                            </Link>
                            : <Link to="/login" className='main-auth-submit_link'>
                                Login
                            </Link>
                    }
                </button>
            </div>
        )
    }
}