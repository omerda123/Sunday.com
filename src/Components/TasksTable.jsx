import React from 'react'
import Task from './Task'

export default function TasksTable(props) {
    return (
        <div>
            {
                props.tasks.map((iteration, index) => {
                    return (
                        <table key={index}>
                            <thead>
                                <tr key={index * 10}>
                                    <th width="3px"></th>
                                    <th width="300px" className='week-header'>
                                        {iteration.iterationName}
                        </th>
                                    <th width="60px">
                                        Person
                        </th>
                                    <th width="70px">
                                        Priority
                        </th>
                                    <th width="200px">
                                        Timeline
                        </th>
                                </tr>
                            </thead>
                            <tbody>
                                {iteration.tasks.map(task => {
                                    return (<Task taskId={task.taskId} taskName={task.taskName} progress={task.Progress} priority={task.priority} assignee={task.assigneeId} users={props.users}></Task>)
                                })
                                }



                            </tbody>
                        </table>
                    )
                }


                )
            }
        </div>)
}