import './App.css';
import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import Calculator from "./components/Calculator/Calculator";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";

function App() {
    return (
        <div className='main'>
            <Switch>
                <Route path="/login" component={Login} exact />
                <Route path="/registration" component={Registration} exact />
                <Route path="/calculator" component={Calculator} />
                <Redirect from="/" to="/login"/>
            </Switch>
        </div>
    )
}

export default App;
