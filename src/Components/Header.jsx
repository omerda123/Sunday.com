import React from 'react';
import Avatar from './Avatar';

export default function Header(props) {
    return (
        <div className="nav-bar">
            <div className="top-left">
                <span> <img src="http://s3.amazonaws.com/general-assets/monday-200x200.png" alt="Logo" className="logo"/> </span>
                <span> Sunday </span>
                <span>
                    <img src="http://cdn.onlinewebfonts.com/svg/img_207399.png" className="notification" alt="notification"></img>
                </span>
            </div>
            <div className="top-right">
                <Avatar image="https://pickaface.net/gallery/avatar/20151109_144853_2380_sample.png" toggleUserMenu={props.toggleUserMenu}></Avatar>
            </div>
        </div>
    )
}
