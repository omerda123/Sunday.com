import React from 'react'

export default function AddTask(props) {
    return (
        <div className="add-task-form">
                Task Name <input type="text" onChange={(e, value) => props.handleChange(e, "taskName")}></input> 
                Assignee Id <input type="text" onChange={(e, value) => props.handleChange(e, "assigneeId")}></input>
                Priority <input type="text" onChange={(e, value) => props.handleChange(e, "priority")}></input>
                Progress <input type="text" onChange={(e, value) => props.handleChange(e, "progress")}></input>
                <button onClick={()=> props.addTask()}>Submit</button>
        </div>
    )
}
