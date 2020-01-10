import React from 'react'

export default function UserMenu(props) {
    return (
        <div className="user-menu" onMouseLeave={()=> props.toggleUserMenu()}>
            <li key="1"> profile </li>
            <hr></hr>
            <li key="2"> Log out </li>
        </div>
    )
}
