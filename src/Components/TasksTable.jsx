import React from 'react'
import Task from './Task'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons'


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
                                       <span onClick={()=> props.createTableAnimation()}> {iteration.iterationName} </span>
                                       <span onClick={()=> props.toggleAddUserMenu(iteration.iterationName)}> <FontAwesomeIcon icon={faPlusSquare}></FontAwesomeIcon></span>
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
                                    return (<Task tableClass= {props.tableClass} taskId={task.taskId} taskName={task.taskName} progress={task.progress} priority={task.priority} assignee={task.assigneeId} users={props.users}></Task>)
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