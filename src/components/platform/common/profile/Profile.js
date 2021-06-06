import React from 'react';
import styles from './Profile.module.css'
import {useState,useRef,useEffect} from 'react'
import subStyles from '../styles/Subpage.module.css';
import {Input,Element,Label,Button,Displayer} from '../form/controls/Controls';
import axios from 'axios';

const Profile = () => {
  const fnameRef=useRef(null);
  const emailRef=useRef(null);
  const lnameRef=useRef(null);
  const yearRef=useRef(null);
  const collegeRef=useRef(null);
  const branchRef=useRef(null);
  const fieldRef=useRef(null);
  const phoneRef=useRef(null);
  const [edit,setEdit]=useState(false);
  const [load,setLoad]=useState();
  const [profile,setProfile]=useState();
  const getProfile= async()=>{
      try{
        const profile = await axios.get('http://localhost:8000/user/profile?pid=1');
        console.log(profile);
        setProfile(profile.data.data);
      }
      catch(err){
          console.log("Profile--->",err);
      }
      

  }
  useEffect(()=>{
      getProfile();
  },[load]);
  

  const updateHandler =async()=>{
      const post_body={};
      // const fields=[fnameRef.current.value,lnameRef.current.value,emailRef.current.value,phoneRef.current.value,collegeRef.current.value,branchRef.current.value,yearRef.current.value,fieldRef.current.value];
      [fnameRef,lnameRef,emailRef,phoneRef,collegeRef,branchRef,yearRef,fieldRef].map((ele,i)=>{
          console.log(ele.current);
          post_body[ele.current.name]=ele.current.value;
          
      });
      // TODO:Have to upate the PID correctly after auth
      post_body['pid']=1;
      const updateProfile=async ()=>{
        try{
          await axios.post('http://localhost:8000/user/profile',post_body);
          setLoad(Math.random());
        }
        catch(err){
          console.log("Err---->Profile update",err);
        }
        

      }
      updateProfile();
      setEdit(false);
  }
  


  const editHandler =(event)=>{
    setEdit(true);
    setLoad(Math.random());
  }

  
  return (
    <div className={subStyles.subpage}>
      <div className={subStyles.subpage__title}>
          <p>Profile</p>
      </div>
      <div className={subStyles.subpage__body}>
        
      <Element>
         <Label name="First name" />
         {
         edit?<Input forwardedRef={fnameRef} name="first_name" defaultValue={profile?profile.first_name:null} />:
         <Displayer  value={profile?profile.first_name:null}/>
         }
         </Element>
         <Element>
         <Label name="Last name" />
         {
         edit?<Input forwardedRef={lnameRef} name="last_name"  defaultValue={profile?profile.last_name:null}/>:
         <Displayer  value={profile?profile.last_name:null}/>
         }
         </Element>
         <Element>
         <Label name="Email" />
         {
         edit?<Input forwardedRef={emailRef} name="email" defaultValue={profile?profile.email:null}/>:
         <Displayer  value={profile?profile.email:null}/>
         }
         </Element>
         <Element>
         <Label name="Phone" />
         {
         edit?<Input forwardedRef={phoneRef} name="phone" defaultValue={profile?profile.personal.phone:null}/>:
         <Displayer  value={profile?profile.personal.phone:null}/>
         }
         </Element>
         <Element>
         <Label name="College" />
         {
         edit?<Input forwardedRef={collegeRef} name="college" defaultValue={profile?profile.education.college:null} />:
         <Displayer  value={profile?profile.education.college:null}/>
         }
         </Element>
         <Element>
         <Label name="Branch" />
         {
         edit?<Input forwardedRef={branchRef} name="branch" defaultValue={profile?profile.education.branch:null}/>:
         <Displayer  value={profile?profile.education.branch:null}/>
         }
         </Element>
         <Element>
         <Label name="Year" />
         {
         edit?<Input forwardedRef={yearRef} name="year" defaultValue={profile?profile.education.year:null}/>:
         <Displayer  value={profile?profile.education.year:null}/>
         }
         </Element>
         <Element>
         <Label name="Field" />
         {
         edit?<Input forwardedRef={fieldRef} name="field" defaultValue={profile?profile.education.field:null}/>:
         <Displayer  value={profile?profile.education.field:null}/>
         }
         </Element>
        
          
      </div>
      <div className={subStyles.subpage__footer}>
      {edit?<Button text="Update" onClick={updateHandler}/>:<Button text="Edit" onClick={editHandler}/>}
      </div>
      
    </div>
    
  );
};

export default Profile;
