import React, { Component } from 'react';
import Header from './Components/Header';
import './App.css'
import UserMenu from './Components/UserMenu';
import MainContainer from './Components/MainContainer';
import tasks from './Data/tasks.json'
import users from './Data/users.json'

export default class App extends Component {
  state = {
    userMenu: false,
    tasks: tasks,
    users:users
  }
  toggleUserMenu() {
    this.setState({ userMenu: !this.state.userMenu })
  }
  render() {
    return (
      <div className="wrapper">
        <Header toggleUserMenu={() => this.toggleUserMenu()}></Header>
        {
          this.state.userMenu ?
            <UserMenu toggleUserMenu={() => this.toggleUserMenu()}></UserMenu> : null
        }

        <MainContainer users={this.state.users} tasks={this.state.tasks}></MainContainer>
      </div>
    )
  }
}
