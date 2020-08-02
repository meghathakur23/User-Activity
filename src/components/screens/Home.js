import Container from '@material-ui/core/Container';
import UserCardView from "../views/UserCardView"
import { Paper } from '@material-ui/core';
import React, { Component } from 'react';

import data from "../../data/testdata.json"

class Home extends Component {
    render() {
        return (
            <div className="App" >
                {data["members"].map((user,i) => 
                    !user._deleted && ( 
                        <Paper elevation={0} key={i}>
                            <Container fixed >
                                <UserCardView user_details={user} />
                            </Container>
                        </Paper>
                    )
                )}
            </div>
        );
    }
}

export default Home;