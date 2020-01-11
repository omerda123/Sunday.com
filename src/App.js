import React, { Component } from 'react';
import './App.css'
import './animations.css'
import Header from './Components/Header';
import UserMenu from './Components/UserMenu';
import MainContainer from './Components/MainContainer';
import LogInForm from './Components/LogInForm'
import tasks from './Data/tasks.json'
import users from './Data/users.json'
import {
  BrowserRouter as Router,
} from "react-router-dom";


export default class App extends Component {
  iterationName = "";
  userName = ""
  password = ""
  taskName = ""
  assigneeId = 1
  priority=""
  progress =""
  state = {
    notifications: [],
    notificationMenu: false,
    taskId: 7,
    tableClass: "active",
    listView: true,
    addTaskMenu: false,
    loggedInUser: {},
    numOfRetries: 3,
    userFound: true,
    loggedIn: false,  // convert to false
    userMenu: false,
    tasks: tasks,
    users: users
  }
  toggleUserMenu() {
    this.setState({ userMenu: !this.state.userMenu })
  }
  toggleNotificationMenu() {
    if (this.state.notificationMenu){
      this.setState({notifications: [] })
    }
    this.setState({ notificationMenu: !this.state.notificationMenu })
  }
  toggleAddUserMenu(iterationName) {
    this.setState({ addTaskMenu: !this.state.addTaskMenu });
    this.iterationName = iterationName;
    console.log(iterationName);
    
  }
  addTask() {
    const _tasks = [...this.state.tasks];
    const currentIteration = _tasks.find(iteration => iteration.iterationName === this.iterationName)
    // console.log(currentIteration.tasks);
    currentIteration.tasks.push(
      {
        "taskId": this.state.taskId,
        "taskName": this.taskName,
        "assigneeId": this.assigneeId,
        "priority": this.priority,
        "progress": this.progress
      }
    )

    this.setState({
      tasks:_tasks,
      taskId: this.state.taskId +1 ,
      addTaskMenu:false})
      this.addNotification("New task added")
      
  }
  addNotification(notification){
    const _notifications = [...this.state.notifications]
    _notifications.push(notification);
    this.setState ({notifications: _notifications})
  }
  handleChange(e, value) {
    switch (value) {
      case "userName":    this.userName = e.target.value; break;
      case "password":    this.password = e.target.value; break;
      case "taskName":    this.taskName = e.target.value; break;
      case "assigneeId":  this.assigneeId = parseInt(e.target.value); break;
      case "priority":  this.priority = e.target.value; break;
      case "progress":  this.progress = e.target.value; break;
      default: console.log("error with input");
      
    }

  }
  validateUser() {
    let searchUser = this.state.users.find(user => user.userName === this.userName);
    if (searchUser) {
      this.setState({ userFound: true })
      if ((this.userName === searchUser.userName) && (this.password === searchUser.password)) {
        this.setState({ loggedIn: true, loggedInUser: searchUser })
      }
      else {
        this.setState({ numOfRetries: this.state.numOfRetries - 1 })
      }
    }
    else {
      this.setState({ userFound: false })
    }

  }

  toggleView(listView) {
    this.setState({ listView: listView })
  }

  logOut() {
    this.setState({ loggedIn: false })
  }

  createTableAnimation() {
    if (this.state.tableClass === "active")
      this.setState({ tableClass: "" })
    else
      this.setState({ tableClass: "active" })
  }


  render() {
    return (
      <div className="wrapper">
        <Router>
          <Header toggleNotificationMenu={()=> this.toggleNotificationMenu()} notifications={this.state.notifications} notificationMenu={this.state.notificationMenu} toggleUserMenu={() => this.toggleUserMenu()} loggedInUser={this.state.loggedInUser}></Header>
          {
            this.state.userMenu ?
              <UserMenu logOut={() => this.logOut()} toggleUserMenu={() => this.toggleUserMenu()}></UserMenu> : null
          }
          {
            this.state.loggedIn ? null :
              <LogInForm userFound={this.state.userFound} retries={this.state.numOfRetries} handleChange={(e, value) => this.handleChange(e, value)} validateUser={() => this.validateUser()}></LogInForm>
          }
          <MainContainer
            handleChange={(e, value) => this.handleChange(e, value)}
            addTaskMenu={this.state.addTaskMenu}
            addTask={()=> this.addTask()}
            toggleAddUserMenu={(value) => this.toggleAddUserMenu(value)}
            createTableAnimation={() => this.createTableAnimation()}
            tableClass={this.state.tableClass}
            loggedInUser={this.state.loggedInUser}
            users={this.state.users}
            tasks={this.state.tasks}
            toggleView={(listView) => this.toggleView(listView)}
            listView={this.state.listView}
          ></MainContainer>

        </Router>
      </div>
    )
  }
}
