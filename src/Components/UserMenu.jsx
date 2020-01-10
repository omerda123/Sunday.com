import React from 'react'
import {Link} from "react-router-dom";

export default function UserMenu(props) {
    return (
        <div className="user-menu" onMouseLeave={()=> props.toggleUserMenu()}>
           <Link to="/profile">profile</Link>
            <hr></hr>
            <Link to="/" onClick={()=>props.logOut()}> Log out</Link> 
        </div>
    )
}
