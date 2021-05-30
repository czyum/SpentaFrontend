import {React,useState,useContext} from 'react';
import {Avatar} from "@material-ui/core";
import styles from './SidebarChat.module.css';

const SidebarChat=(props)=> {
   
    return (
        <div className={styles["sidebarChat"]}>
            <Avatar src="https://avatars.dicebear.com/api/human/chetan.svg"/>
            <div className={styles["sidebarChat__info"]}>
                <h2>{props.group_name}</h2>
                <p>message.....</p>
            </div>
        </div>
    )
}

export default SidebarChat;
