import Container from '@material-ui/core/Container';
import { Paper } from '@material-ui/core';
import React, { Component } from 'react';

import data from "../../config/config.json"
import UserData from '../userinfo/UserData';

class Home extends Component {
    render() {
        return (
            <div className="App" >
                {data["members"].map((user,i) => 
                    !user._deleted && ( 
                        <Paper elevation={0} key={i}>
                            <Container fixed >
                                <UserData user_details={user} />
                            </Container>
                        </Paper>
                    )
                )}
            </div>
        );
    }
}

export default Home;