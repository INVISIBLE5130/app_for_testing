import React, {Component} from 'react'
import {Link} from "react-router-dom";
import '../../css/Main.css'

export default class Calculator extends Component {
    render() {
        return (
            <div className='main-auth'>
                <h1 className='main-auth-title'>
                    Calculator
                </h1>

                <input className='main-auth-input' type="text" placeholder='Number'/>
                <input className='main-auth-input' type="text" placeholder='%'/>

                <button className='main-auth-submit'>
                    <Link to="/calculator" className='main-auth-submit_link'>
                        Submit
                    </Link>
                </button>
            </div>
        )
    }
}