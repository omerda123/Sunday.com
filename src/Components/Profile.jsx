import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEdit } from '@fortawesome/free-regular-svg-icons'

export default function Profile(props) {
    console.log(props.loggedInUser);

    return (
        <div className="main-container">
            <h1> Profile &nbsp;
            <FontAwesomeIcon  icon={faEdit} />

            </h1>
            <div> <span className="profile-key">User ID:</span> {props.loggedInUser.userId} </div>
            <div> <span className="profile-key"> User Name:</span> {props.loggedInUser.userName}</div>
            <div> <span className="profile-key">Password:</span>   {props.loggedInUser.password}</div>
            <div> <span className="profile-key">Private Name:</span>  {props.loggedInUser.privateName}</div>
            <div> <span className="profile-key">Last Name:</span>  {props.loggedInUser.surName}</div>
            <div> <span className="profile-key">Avatar URL:</span>  {props.loggedInUser.avatar}</div>
        </div>
    )
}
