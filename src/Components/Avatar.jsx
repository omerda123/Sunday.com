import React from 'react'

export default function Avatar(props) {
    return (
        <span>
            <img onMouseEnter={props.toggleUserMenu} src={props.image} className="avatar" alt={props.image}></img>
        </span>
    )
}
