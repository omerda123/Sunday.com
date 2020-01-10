import React from 'react'
import {
    Switch,
    Route,
} from "react-router-dom";
import Profile from './Profile'
import Home from './Home'

export default function MainContainer(props) {
    return (
            <Switch>
                <Route exact path="/">
                    <Home tasks={props.tasks} users={props.users}
                    toggleView={props.toggleView} listView={props.listView}></Home>
                </Route> 
                <Route exact path="/profile">
                    <Profile loggedInUser={props.loggedInUser}></Profile>
                </Route>
            </Switch>

            
    )


}
