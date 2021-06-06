import {React,useState,useContext} from 'react';
import styles from './SidebarChat.module.css';

const SidebarChat=(props)=> {
   
    return (
        <div className={styles["sidebarChat"]}>
            <div className={styles["sidebarChat__info"]}>
                <h2>{props.group_name}</h2>
                <p>message.....</p>
            </div>
        </div>
    )
}

export default SidebarChat;
