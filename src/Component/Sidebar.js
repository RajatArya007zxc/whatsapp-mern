import React from 'react'
import './Sidebar.css'
import {Avatar,IconButton} from '@material-ui/core'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SidebarChat from '../Component/SidebarChat';
import d from '../Images/girl.webp'

export default function Sidebar() {
    return (
        <div className="sidebar">

            <div className="sidebar_header">
            <Avatar src={d}/>

                <div className="sidebar_headerRight">
                   
                    <IconButton>
                    <DonutLargeIcon/>
                   </IconButton>

                    <IconButton>
                    <ChatIcon/>
                    </IconButton>

                    <IconButton>
                    <MoreVertIcon/> 
                    </IconButton>
                    
                  
                     
                </div>


            </div>

            <div className="sidebar_search">
                     
                     <div className="sidebar__searchContainer">
                         <SearchOutlinedIcon/>
                         <input type="text" placeholder="Search it Feallas"/>
                     </div>
  
            </div>



            <div className="sidebar_chats">
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>

            </div>

        </div>
    )
}
