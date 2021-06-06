import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import styles from './Chat.module.css';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';
import {React,useState,useRef,useEffect,useContext} from 'react';
import {Link} from 'react-router-dom';
import socket from "../../../socket";
import axios from "axios";
import GroupContext from "../Contexts/GroupContext";
import ScrollableFeed from 'react-scrollable-feed';

const Chat=()=> {
    const [message,setMessage]=useState([]);
    const [seed,setSeed]=useState("");
    const [chatGroup,setChatGroup]=useContext(GroupContext);
    const socketRef=useRef();
    const inputRef=useRef();
    const messageEl=useRef();
    socketRef.current=socket;
    const sendMessage=async(e)=>{
        e.preventDefault();
        const new_message=inputRef.current.value;
        inputRef.current.value="";
        inputRef.current.focus();
        if(new_message.length>0){
            await axios.post("http://localhost:8000/chat/message/create",{
            group:chatGroup,
            user_name:"Chethan",
            message:new_message
        })
        socketRef.current.emit('message','msg');
        setSeed(Math.random());
        }
        

    }
    useEffect(()=>{
        // scrollToBottom();
        if (messageEl) {
            messageEl.current.addEventListener('DOMNodeInserted', event => {
              const { currentTarget: target } = event;
              target.scroll({ top: target.scrollHeight, behavior: 'auto' });
            });
          }
        socketRef.current.on('message',(data)=>{
            setSeed(Math.random());
        });
        return ()=>{
            socketRef.current.disconnect();
        }
    },[]);

    
    useEffect(()=>{
        // scrollToBottom();
        const getMessages=async()=>{
            try{
                const messages=await axios.get(`http://localhost:8000/chat/message/conversations?id=${chatGroup}`);
                setMessage(messages.data.data.reverse());

            }
            catch(err){
                setMessage([]);
                
            }
            
        };
        getMessages();
    },[seed,chatGroup]);
    return (
        <div className={styles["chat"]}>
            <div className={styles["chat__header"]}>
                <div className={styles["chat__headerInfo"]}>
                    <h3>{chatGroup}</h3>
                </div>
            </div>
           
            <div className={styles["chat__body"]} ref={messageEl}>
            {
                message.map((data,i)=>{
                    return(
                        
                    <p key={i}className={`${styles.chat__message} ${true && styles['chat__sender']}`}>
                    <span className={styles["chat__name"]}>Chethan</span>
                        {data.message}
                    <span className={styles["chat__timestamp"]}>7:28</span>
                    </p>
                    
                    )
                })
            }
            
            </div>
           
            
            <form className={styles["chat__footer"]} onSubmit={sendMessage}>
            <InsertEmoticonIcon/>
                <div className={styles["chat__search"]}>
                    <div className={styles["chat__searchContainer"]}>
                    <input type="text" placeholder="Say something" ref={inputRef} />
                    </div>
                </div>
                
                <IconButton>
                <SendIcon onClick={sendMessage}/>
                </IconButton>
                
            </form>
        </div>

    )
}

export default Chat;
