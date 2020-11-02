import './App.css';
import React, {Component} from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import Calculator from "./components/Calculator/Calculator";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";

class App extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    registerUser = (email, password) => {
        this.setState({
            email: email,
            password: password
        })
    }

    render() {
        return (
            <div className='main'>
                <Switch>
                    <Route path="/login" component={() => <Login email={this.state.email} password={this.state.password}/>}/>
                    <Route path="/registration" component={() => <Registration registerUser={this.registerUser}/>}/>
                    <Route path="/calculator" component={Calculator}/>
                    <Redirect from="/" to="/login"/>
                </Switch>
            </div>
        )
    }
}

export default App;
