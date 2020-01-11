import React from 'react'
import Avatar from './Avatar'
import ProgressBar from './ProgressBar'


export default function Task(props) {
    let user = props.users.find(user => user.userId === props.assignee);
    return (
        <>
            <tr key={props.taskId} className={props.tableClass}>
                <td className="purple" ><div></div></td>
                <td className={props.tableClass}><div>
                    {props.taskName}
                    </div>
                        </td>
                <td><div><Avatar image={user.avatar}></Avatar></div></td>
                <td className={props.priority}><div> {props.priority}</div></td>
                <td className="timeline"><ProgressBar width={props.progress}></ProgressBar></td>
            </tr>
        </>
    )
}
