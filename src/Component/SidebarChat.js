import React from 'react'
import "./SidebarChat.css";
import {Avatar} from '@material-ui/core'

export default function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar/>
            <div className="Info">
                <h3>room Name</h3>
                <p> hey its coneivable</p>
            </div>
        </div>
    )
}
