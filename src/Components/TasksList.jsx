import React from 'react'
import TasksTable from './TasksTable'


export default function TasksList(props) {
    return (
        <div  className="tasks-menu">
            <TasksTable 
            toggleAddUserMenu = {(value)=>props.toggleAddUserMenu(value)}
            tasks={props.tasks} 
            users={props.users}
            createTableAnimation={()=> props.createTableAnimation()}
            tableClass= {props.tableClass}
            ></TasksTable>
        </div>
    )
}
