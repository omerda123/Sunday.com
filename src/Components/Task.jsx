import React from 'react'
import Avatar from './Avatar'
import ProgressBar from './ProgressBar'


export default function Task(props) {
    let user = props.users.find(user => user.userId === props.assignee);
    return (
        <>
            <tr key={props.taskId}>
                <td className="purple"></td>
                <td>
                    {props.taskName}
                        </td>
                <td><Avatar image={user.avatar}></Avatar></td>
                <td className={props.priority}> {props.priority}</td>
                <td className="timeline"><ProgressBar width={props.progress}></ProgressBar></td>
            </tr>
        </>
    )
}
