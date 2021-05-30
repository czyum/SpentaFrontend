import {React,useState} from 'react';
import Sidebar from "../Sidebar/Sidebar";
import Chat from "../Chat/Chat";
import styles from "./ChatApp.module.css";
import GroupContext from "../Contexts/GroupContext";
const ChatApp=()=>{
   const [chatGroup,setChatGroup]=useState("");
   
   
   return(

   <div className={styles["chat_app"]}>
   <div className={styles["chat_app__body"]}>
      <GroupContext.Provider value={[chatGroup,setChatGroup]}>
        <Sidebar/>
        <Chat/>
      </GroupContext.Provider>
        </div>
        
        
   </div>
);}


export default ChatApp;