import React from 'react';
import Avatar from './Avatar';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons'


export default function Header(props) {
    return (
        <div className="nav-bar">
            <div className="top-left">
                <span>
                    <Link to="/"><img src="http://s3.amazonaws.com/general-assets/monday-200x200.png" alt="Logo" className="logo" /> </Link> </span>
                <span className="logo-text"> Sunday.com </span>
                <span className>
                    &nbsp; &nbsp;   <FontAwesomeIcon onClick={() => props.toggleNotificationMenu()} className="notification" icon={faBell}></FontAwesomeIcon>
                    <span className="notification-badge">
                        {props.notifications.length === 0 ?
                            null :
                            props.notifications.length
                        }
                    </span>
                    {
                        props.notificationMenu ?
                            <div className="notification-menu">
                                {props.notifications.map((notification) => {
                                    return (<div> {notification} </div>)
                                })}
                            </div>:
                            null

                    }


                </span>
            </div>
            <div className="top-right">
                <Avatar image={props.loggedInUser.avatar} toggleUserMenu={props.toggleUserMenu}></Avatar>
            </div>
        </div>
    )
}
