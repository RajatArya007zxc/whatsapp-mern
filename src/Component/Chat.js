import React from 'react'
import './Chat.css';
import {Avatar,IconButton} from '@material-ui/core'
import AttachFile from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"
import SelectInput from '@material-ui/core/Select/SelectInput';
import MicIcon from '@material-ui/icons/Mic'
export default function Chat() {
    return (
        <div className="chat">
           <div className="chat_header">
             <Avatar/>
  
<div className="chat_headerInfo">
    <h3>Room Name</h3>
    <p>Last Seen at...</p>
</div>


            
  <div className="chat_headerRight">
                   
                   <IconButton>
                   <SearchOutlined/>
                  </IconButton>

                   <IconButton>
                   <AttachFile/>
                   </IconButton>

                   <IconButton>
                   <MoreVertIcon/> 
                   </IconButton>
                    
               </div>


           </div>

           {/* Below Part */}
           <div className="chat_body"> 

           <p className="chat_message"> 
               <span className="chat_name">Rajat</span>


               Tjis is message
                 <span className="chat_timestamp">
                     {
                         new Date().toUTCString()
                     }
                 </span>

           </p>


           <p className="chat_message chat_reciever"> 
               <span className="chat_name">Rajat</span>


               Tjis is message
                 <span className="chat_timestamp">
                     {
                         new Date().toUTCString()
                     }
                 </span>

           </p>

           <p className="chat_message"> 
               <span className="chat_name">Rajat</span>


               Tjis is message
                 <span className="chat_timestamp">
                     {
                         new Date().toUTCString()
                     }
                 </span>

           </p>

           </div>

{/* Footer */}
           <div className="chat_footer">
               <InsertEmoticonIcon/>
               <form>
                 
                 <input  placeholder="Type Message" type="text"/>
              
              <button  type="submit">Send a Message</button>
               </form>
               <MicIcon/>

           </div>
        </div>
    )
}
