import React from 'react'
import TasksList from './TasksList'
export default function MainContainer(props) {
    return (
        <div className="main-container">
            <TasksList tasks={props.tasks}></TasksList>
           
        </div>
    )
}
