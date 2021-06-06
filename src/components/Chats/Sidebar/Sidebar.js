import {React,useState,useRef,useEffect,useContext} from 'react';
import styles from "./Sidebar.module.css";
import {Avatar,IconButton} from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import SidebarChat from "../SidebarChat/SidebarChat";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import GroupContext from "../Contexts/GroupContext";
import Header from '../../platform/common/header/header/Header';
import axios from 'axios';
const SideBar=()=>{
    
    const [chatGroup,setChatGroup]=useContext(GroupContext);
    const [groups,setGroups]=useState([]);

    const changeGroupHandler=(groupname)=>{
          setChatGroup(prevState=>groupname);
    }
    useEffect(()=>{
        const getGroups=async ()=>{
            try{
                const user=await axios.get("http://localhost:8000/user/find/findByPid?pid=1");
                setGroups(user.data.data.groups);
            }
            catch(err){
                setGroups([]);
            }

        }
        getGroups();
    },[])    
    return(
    <div className={styles["sidebar"]}>
        <div className={styles.sidebar__header}>
           <Header/>
        </div>
        {/* <div className={styles["sidebar__header"]}>
        <IconButton>
           <ArrowBackIcon/>
           </IconButton>
          <div className={styles["sidebar__headerRight"]}>
            
          
           <IconButton>
           <MoreVertIcon/>
           </IconButton>
           <Avatar/>
           
          </div>
        </div> */}
        {/* <div className={styles["sidebar__search"]}>
            <div className={styles["sidebar_searchContainer"]}>
            <SearchOutlined/>
            <input type="text" name="search" id="" placeholder="search something" />
            </div>
            
        </div> */}
        <div className={styles["sidebar__chats"]}>
            {
                groups.map((ele,i)=>(
                    <div key={i} onClick={()=>{changeGroupHandler(ele)}}>
                
                   <SidebarChat  group_name={ele}/>
                    </div>
                ))
            }
        </div>
    </div>
)}

export default SideBar;
