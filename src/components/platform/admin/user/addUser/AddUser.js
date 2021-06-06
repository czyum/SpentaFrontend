import React from 'react';
import styles from './AddUser.module.css';
import {useState,useRef,useEffect} from 'react'
import subStyles from '../../../common/styles/Subpage.module.css';
import {Input,Element,Label,Button,Displayer} from '../../../common/form/controls/Controls';
import axios from 'axios';

const AddUser = () => {
 const [load,setLoad]=useState(null);
  const fnameRef=useRef(null);
  const emailRef=useRef(null);
  const lnameRef=useRef(null);
  const yearRef=useRef(null);
  const collegeRef=useRef(null);
  const branchRef=useRef(null);
  const fieldRef=useRef(null);
  const phoneRef=useRef(null);
  const motherRef=useRef(null);
  const fatherRef=useRef(null);
  const addressRef=useRef(null);
  const pidRef=useRef(null);
  const isadminRef=useRef(null);
  const isactiveRef=useRef(null);
  
  const createHandler=()=>{
    const post_body={};
    // const fields=[fnameRef.current.value,lnameRef.current.value,emailRef.current.value,phoneRef.current.value,collegeRef.current.value,branchRef.current.value,yearRef.current.value,fieldRef.current.value];
    [pidRef,fnameRef,lnameRef,emailRef,phoneRef,collegeRef,branchRef,fieldRef,motherRef,fatherRef,addressRef].map((ele,i)=>{
        console.log(ele.current);
        post_body[ele.current.name]=ele.current.value;
        
    });
    post_body['isadmin']=isadminRef.current.value=='y'?true:false;
    post_body['isactive']=true;
    post_body['year']=parseInt(yearRef.current.value);
    console.log(post_body);
    // TODO: Have to check on whetehr to have automatic pid
      const create=async()=>{
          try{
            const res=await axios.post('http://localhost:8000/user/create',post_body);
            console.log("ADD user-->creted",res);
          }
          catch(err){
            console.log('ADD user--->err',err);
          }
          

      };
      create();
      setLoad(Math.random());
  }
  return (
    <div className={subStyles.subpage}>
      <div className={subStyles.subpage__title}>
          <p>Add New User</p>
      </div>
      <div className={subStyles.subpage__body}>
      <div className={subStyles.subpage__subtitle}>
          Personal Details
      </div>
      <Element>
            <Label name='PID'/>
            <Input forwardedRef={pidRef} name='pid'/>
        </Element>
        <Element>
            <Label name='First name'/>
            <Input forwardedRef={fnameRef} name='first_name'/>
            <Label name='Last name'/>
            <Input forwardedRef={lnameRef} name='last_name'/>
        </Element>
        {/* <Element>
            
        </Element> */}
        <Element>
            <Label name='Email'/>
            <Input forwardedRef={emailRef} name='email'/>
        </Element>
        <Element>
            <Label name='Phone'/>
            <Input forwardedRef={phoneRef} name='phone'/>
        </Element>
        <Element>
            <Label name='Year'/>
            <Input forwardedRef={yearRef} name='year'/>
        </Element>
        <Element>
            <Label name='College'/>
            <Input forwardedRef={collegeRef} name='college'/>
        </Element>
        <Element>
            <Label name='Field'/>
            <Input forwardedRef={fieldRef} name='field'/>
        </Element>
        <Element>
            <Label name='Branch'/>
            <Input forwardedRef={branchRef} name='branch'/>
        </Element>
        <Element>
            <Label name='Mother'/>
            <Input forwardedRef={motherRef} name='mother'/>
        </Element>
        <Element>
            <Label name='Father'/>
            <Input forwardedRef={fatherRef} name='father'/>
        </Element>
        <Element>
            <Label name='Address'/>
            <Input forwardedRef={addressRef} name='address'/>
        </Element>
        <Element>
            <Label name='IsAdmin'/>
            <Input forwardedRef={isadminRef} name='address'/>
        </Element>



          
      </div>
      <div className={subStyles.subpage__footer}>
       <Button text="Create" onClick={createHandler}/>
      </div>
      
    </div>
    
  );
};

export default AddUser;

