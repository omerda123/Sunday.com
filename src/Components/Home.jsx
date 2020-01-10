import React from 'react'
import TasksList from './TasksList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListAlt } from '@fortawesome/free-regular-svg-icons'
import { faThLarge } from '@fortawesome/free-solid-svg-icons'
import GridTask from './GridTask'

export default function Home(props) {
    return (
        <div className="main-container">

            <div>
                <div className="icons">
                    <FontAwesomeIcon onClick={() => props.toggleView(true)} icon={faListAlt} />
                    <FontAwesomeIcon onClick={() => props.toggleView(false)} icon={faThLarge} />
                </div>
                <div> <h1> Team Tasks</h1></div>
                {
                    props.listView ?
                        <TasksList tasks={props.tasks} users={props.users}></TasksList> :
                        <GridTask tasks={props.tasks} users={props.users}></GridTask>
                }
            </div>
        </div>

    )
}
