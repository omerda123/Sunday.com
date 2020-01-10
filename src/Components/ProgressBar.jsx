import React from 'react'

export default function ProgressBar(props) {
    const innerStyle={
        width:`${props.width}`
    }
    return (
        <div className="progress-bar">
            <div className="progress-bar-inner" style={innerStyle}></div>
        </div>
    )
}
