import React from 'react';
import Avatar from './Avatar';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBell } from '@fortawesome/free-regular-svg-icons'


export default function Header(props) {
    return (
        <div className="nav-bar">
            <div className="top-left">
                <span>
                    <Link to="/"><img src="http://s3.amazonaws.com/general-assets/monday-200x200.png" alt="Logo" className="logo"/> </Link> </span>
                <span> Sunday </span>
                <span>
                    <FontAwesomeIcon className="notification" icon={faBell}></FontAwesomeIcon>
                </span>
            </div>
            <div className="top-right">
                <Avatar image={props.loggedInUser.avatar} toggleUserMenu={props.toggleUserMenu}></Avatar>
            </div>
        </div>
    )
}
