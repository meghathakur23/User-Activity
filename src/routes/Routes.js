import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from '../components/screens/Home'
import Calender from '../components/calender/Calender';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}  />
                <Route exact path="/all" component={Calender} />
            </Switch>    
        </BrowserRouter>
    )
}
export default Routes;
    