import React, { Component } from 'react';
import Header from './Components/Header';
import './App.css'
import UserMenu from './Components/UserMenu';
import MainContainer from './Components/MainContainer';
import LogInForm from './Components/LogInForm'
import tasks from './Data/tasks.json'
import users from './Data/users.json'

export default class App extends Component {

  userName=""
  password=""
  state = {
    numOfRetries:3,
    userFound:true,
    loggedIn: false,
    userMenu: false,
    tasks: tasks,
    users: users
  }
  toggleUserMenu() {
    this.setState({ userMenu: !this.state.userMenu })
  }
  handleChange(e, value) {
    (value==="userName")?
      this.userName = e.target.value:
      this.password = e.target.value;
  }
  validateUser() {
    let searchUser = this.state.users.find(user => user.userName === this.userName);
    if(searchUser){
      this.setState({userFound:true})
      if ((this.userName === searchUser.userName) && (this.password === searchUser.password)) {
        this.setState({ loggedIn: true })
      }
      else{
        this.setState({numOfRetries: this.state.numOfRetries- 1})
      }
    }
    else{
      this.setState({userFound:false})
    }

  }

  componentDidUpdate(){
  
  }

  render() {
    return (
      <div className="wrapper">
        <Header toggleUserMenu={() => this.toggleUserMenu()}></Header>
        {
          this.state.userMenu ?
            <UserMenu toggleUserMenu={() => this.toggleUserMenu()}></UserMenu> : null
        }
        {
          this.state.loggedIn ? null :
            <LogInForm userFound={this.state.userFound} retries= {this.state.numOfRetries} handleChange={(e,value) => this.handleChange(e,value)} validateUser={() => this.validateUser()}></LogInForm>
        }
        <MainContainer users={this.state.users} tasks={this.state.tasks}></MainContainer>
      </div>
    )
  }
}
