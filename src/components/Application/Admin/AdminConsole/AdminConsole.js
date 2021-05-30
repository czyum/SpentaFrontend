import React from 'react';
import Tile from '../../Common/Tile/Tile';
import styles from './AdminConsole.module.css';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

const AdminConsole=()=> {
    return (
        <div className={styles['admin-page']}>
            <Tile title="User Management" icon={<PersonOutlineIcon fontSize="large"/>} to="/admin/user"/>
            <Tile/>
            <Tile/>
            <Tile/> 
            <Tile/>
        </div>
    )
}

export default AdminConsole;
