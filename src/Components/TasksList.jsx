import React from 'react'
import TasksTable from './TasksTable'


export default function TasksList(props) {
    return (
        <div  className="tasks-menu">
            <TasksTable tasks={props.tasks} users={props.users}></TasksTable>
        </div>
    )
}
