import React from 'react';
import styles from './Header.module.css';
import Navbar from '../Navbar/Navbar';
const Header=()=>{
    return (
        <div className={styles['appheader']}>
            <div className={styles["appheader__left"]}>
                <Navbar/>
            </div>
            <div className={styles["appheader__right"]}>

            </div>
        </div>
    )
}

export default Header;
