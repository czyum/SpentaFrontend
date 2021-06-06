import React from 'react';
import {Route,Link} from 'react-router-dom';
import Header from '../common/header/header/Header';
import Body from '../body/Body';
import styles from './BaseApp.module.css';
const BaseApp=()=>{
    return (
        <div className={styles['base-app']}>
            <Header/>
            <Body/>
        </div>
    )
}

export default BaseApp;
