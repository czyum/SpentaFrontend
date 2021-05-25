import {Avatar} from "@material-ui/core";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import './Chat.css';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';
import {React,useState,useRef,useEffect,useContext} from 'react';
import {Link} from 'react-router-dom';
import socket from "../../../socket";
import axios from "axios";
import GroupContext from "../Contexts/GroupContext";
const Chat=()=> {
    const [message,setMessage]=useState([]);
    const [seed,setSeed]=useState("");
    const [chatGroup,setChatGroup]=useContext(GroupContext);
    const socketRef=useRef();
    const inputRef=useRef();
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
        socketRef.current.on('message',(data)=>{
            setSeed(Math.random());
        });
        return ()=>{
            socketRef.current.disconnect();
        }
    },[]);

   
    
    useEffect(()=>{
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
        <div className="chat">
            <div className="chat__header">
                <Avatar src="https://avatars.dicebear.com/api/human/chethan.svg"/>
                <div className="chat__headerInfo">
                    <h3>Group name</h3>
                </div>
            </div>
            <div className="chat__body">
            {
                message.map((data,i)=>{
                    return(
                        
                    <p key={i}className={`chat__message ${true && 'chat__sender'}`}>
                    <span className="chat__name">Chethan</span>
                        {data.message}
                    <span className="chat__timestamp">7:28</span>
                    </p>
                    
                    )
                })
            }
                
                
            </div>
            <form className="chat__footer" onSubmit={sendMessage}>
            <InsertEmoticonIcon/>
                <div className="chat__search">
                    <div className="chat__searchContainer">
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
