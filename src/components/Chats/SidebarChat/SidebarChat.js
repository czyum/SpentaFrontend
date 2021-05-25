import {React,useState,useContext} from 'react';
import {Avatar} from "@material-ui/core";
import './SidebarChat.css';

const SidebarChat=(props)=> {
   
    return (
        <div className="sidebarChat">
            <Avatar src="https://avatars.dicebear.com/api/human/chetan.svg"/>
            <div className="sidebarChat__info">
                <h2>{props.group_name}</h2>
                <p>message.....</p>
            </div>
        </div>
    )
}

export default SidebarChat;
