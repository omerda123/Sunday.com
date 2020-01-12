import React from 'react'
import {
    Switch,
    Route,
} from "react-router-dom";
import Profile from './Profile'
import Home from './Home'
import { HashRouter } from "react-router-dom";


export default function MainContainer(props) {
    return (
        <HashRouter basename='/Sunday.com'>
        <Switch>
            <Route path="/">
                <Home 
                addTaskMenu = {props.addTaskMenu}
                addTask = {()=>props.addTask()}
                toggleAddUserMenu={(value)=> props.toggleAddUserMenu(value)}
                tasks={props.tasks} 
                users={props.users}
                toggleView={props.toggleView} 
                listView={props.listView}
                createTableAnimation={()=> props.createTableAnimation()}
                tableClass= {props.tableClass}
                handleChange={(e, value) => props.handleChange(e, value)}
                >

                </Home>
            </Route>
            <Route exact path="/profile">
                <Profile loggedInUser={props.loggedInUser}></Profile>
            </Route>


        </Switch>
        </HashRouter>

    )


}
