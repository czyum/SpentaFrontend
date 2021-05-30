import React from 'react';
import Tile from '../../../Common/Tile/Tile';
import styles from './UserAdminConsole.module.css';
const UserAdminPage=()=> {
    return (
        <div className={styles['user-admin-page']}>
            <Tile title="Add a User" />
            <Tile title='Import/Export Users'/>
            <Tile title='Group Management'/>
            <Tile title='User Information'/> 
            <Tile/>
        </div>
    )
}

export default UserAdminPage;
