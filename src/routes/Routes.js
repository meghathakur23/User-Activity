import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from '../components/screens/Home'
import Callender from '../components/views/UserCardView/Calender';
function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}  />
                <Route exact path="/all" component={Callender} />
            </Switch>    
        </BrowserRouter>
    )
}
export default Routes;
    