import React,{useState} from 'react';
import styles from './ImportExportUsers.module.css';
import subStyles from '../../../common/styles/Subpage.module.css';
import {Input,Element,Label,Button,Displayer} from '../../../common/form/controls/Controls';
import fileDownload from 'js-file-download';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
const ImportExportUsers=()=> {
    const [file,setFile]=useState(null);
    const exportHandler=async()=>{
        try{
            const res=await axios.get('http://localhost:8000/user/export', {
                responseType: 'blob',
              });
              const current_time=new Date().toISOString();
              const fileName=`UserData_export_${current_time}.zip`;           
            fileDownload(res.data,fileName);
        }
        catch(err){
            console.log("Import export handler--->",err);
        }
    }

    const importHandler=async()=>{
        try{
            const formdata=new FormData();
            formdata.append('user_file',file);
            const res=await axios.post('http://localhost:8000/user/import',formdata);
            toast(res.data.message, {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                });
        }
        catch(err){
            console.log("IMport data--->",err);
        }
    }

    const changeHandler=(e)=>{
        let file=e.target.files.length>0?e.target.files[0]:null;
        setFile(file)
    }

    return (
        <div className={subStyles.subpage}>
           <div className={subStyles.subpage__title}>
           Import and Export users
           </div>
           <div className={subStyles.subpage__body}>
                    <Element>
                        <Label name='Export users'/>
                        <Button text='export' onClick={exportHandler}/>
                    </Element>
                    <Element>
                        <Label name='Import users'/>
                        <input type="file" name="file" onChange={(e)=>changeHandler(e)}/>
                        <Button text='import' onClick={importHandler}/>
                    </Element>
                
               </div>
               <ToastContainer
                    bodyClassName={styles.toastBody}
                    progressClassName={styles.toastProgress}
                />
        </div>
    )
}

export default ImportExportUsers;
