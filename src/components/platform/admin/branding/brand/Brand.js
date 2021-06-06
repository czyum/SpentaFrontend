import React from "react";
import {useState,useRef,useEffect} from 'react'
import subStyles from '../../../common/styles/Subpage.module.css';
import styles from './Brand.module.css';
import {Input,Element,Label,Button,Displayer} from '../../../common/form/controls/Controls';
import axios from 'axios';

const Brand = () => {
  const [edit,setEdit]=useState(false);
  const [brand,setBrand]=useState({});
  const [load,setLoad]=useState();
  const nameRef=useRef(null);
  const getBrand=async ()=>{
    try{
      const brand_=await axios.get("http://localhost:8000/branding/getBrand?id=1");
      setBrand(brand_.data.data);
    }
    catch(err){
      console.log("Branding-->",err);
    }
  }

  const updateHandler =()=>{
    const org_name=nameRef.current.value;
    const updateName=async()=>{
      try{
        await axios.post('http://localhost:8000/branding/setBrand',{
        id:1,
        name:org_name
      });
      }
      catch(err){
        console.log("There was some error",err);
      }
      
    }
    updateName();
    setEdit(false);
    setLoad(Math.random());
  }
  
  useEffect(()=>{
    getBrand();
    console.log("This executed");
  },[edit])


  useEffect(()=>{
    console.log("Executed");
    getBrand();
  },[load])

  const editHandler =(event)=>{
    setEdit(true);
    setLoad(Math.random());
  }

  
  return (
    <div className={subStyles.subpage}>
      <div className={subStyles.subpage__title}>
          <p>Branding</p>
      </div>
      <div className={subStyles.subpage__body}>
        
      <Element>
         <Label name="Organization name" />
         {
         edit?<Input forwardedRef={nameRef} name="org_name" />:
         <Displayer  value={brand?brand.name:"name"}/>
         }
         </Element>
        
          
      </div>
      <div className={subStyles.subpage__footer}>
      {edit?<Button text="Update" onClick={updateHandler}/>:<Button text="Edit" onClick={editHandler}/>}
      </div>
      
    </div>
    
  );
};

export default Brand;
