import React from 'react';
import Tile from '../../../common/tile/Tile';
import styles from './UserAdminConsole.module.css';


const UserAdminPage=()=> {
    return (
        <div className={styles['user-admin-page']}>
            <Tile title="Add a User" to='/admin/user/new' />
            <Tile title='Import/Export Users' to='/admin/user/import-export'/>
            <Tile title='Group Management'/>
            <Tile title='User Information' to='/admin/user/info'/> 
            <Tile/>
        </div>
    )
}

export default UserAdminPage;
