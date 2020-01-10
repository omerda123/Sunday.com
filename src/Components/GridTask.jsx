import React from 'react'
import Avatar from './Avatar'

export default function GridTask(props) {
    return (
        <div className="tasks-menu">
            <div className="tasks-wrapper">
                {
                    props.users.map(user => {
                        return (<div className="grid-row">
                    <div className="grid-name">{user.privateName} {user.surName}</div>
                            <div><Avatar image={user.avatar}></Avatar></div>
                            {
                                props.tasks.map(iteration => {
                                    return (
                                        iteration.tasks.map(task => {
                                            if (task.assigneeId === user.userId)
                                                return (
                                                    <div className="task-box">
                                                        {task.taskName}
                                                    </div>
                                                )
                                        })
                                    )
                                })
                            }
                        </div>)
                    })
                }
            </div>
        </div>
    )
}
