import React from "react";
import styles from './Body.modules.css';
import AdminConsole from '../Admin/AdminConsole/AdminConsole';
import UserAdminConsole from '../Admin/User/UserAdminConsole/UserAdminConsole';
import ImportExportUsers from '../Admin/User/ImportExportUsers/ImportExportUsers';
import AddUser from '../Admin/User/AddUser/AddUser';
import updateUser from '../Admin/User/UpdateUser/UpdateUser';
import { Route, Switch } from "react-router-dom";


const Body = () => {
  return (
    <div className={styles["app-body"]}>
      <Switch>
        <Route path='/admin/user' exact component={UserAdminConsole} />
        <Route path='/admin' exact component={AdminConsole} />
        <Route path='/admin/user/newUser' exact component={AddUser} />
        <Route path='/admin/user/importExportUsers' exact component={ImportExportUsers} />
        <Route path='/admin/user/update' exact component={updateUser} />
      </Switch>
    </div>
  );
};

export default Body;
