import React, {Component} from 'react'
import {Link} from "react-router-dom";
import '../../css/Main.css'

export default class Calculator extends Component {
    constructor() {
        super();

        this.state = {
            number: null,
            percent: null
        }
    }

    onChangeNumber = (e) => {
        this.setState({
            number: e.target.value
        });
    }

    onChangePercent = (e) => {
        this.setState({
            percent: e.target.value
        });
    }

    calculate = () => {
        if (this.state.number && this.state.percent) {
            this.setState({
                result: (this.state.percent / 100) * this.state.number
            })
        } else {
            return null
        }
    }

    render() {
        return (
            <div className='main-auth'>
                <h1 className='main-auth-title'>
                    Calculator
                </h1>

                <input className='main-auth-input' type="text" placeholder='Number' onChange={this.onChangeNumber}/>
                <input className='main-auth-input' type="text" placeholder='%' onChange={this.onChangePercent}/>

                {
                    this.state.result
                    ? <p>{this.state.result}</p>
                        : null
                }

                <button className='main-auth-submit' onClick={this.calculate}>
                    <Link to="/calculator" className='main-auth-submit_link'>
                        Submit
                    </Link>
                </button>
            </div>
        )
    }
}