import React from "react";
import styles from './Body.modules.css';
import AdminConsole from '../admin/adminConsole/AdminConsole';
import UserAdminConsole from '../admin/user/userAdminConsole/UserAdminConsole';
import ImportExportUsers from '../admin/user/importExportUsers/ImportExportUsers';
import AddUser from '../admin/user/addUser/AddUser';
import updateUser from '../admin/user/updateUser/UpdateUser';
import InfoUsers from '../admin/user/infoUsers/InfoUsers';
import PerformanceConsole from '../admin/performance/performanceConsole/PerformanceConsole';
import Profile from '../common/profile/Profile';
import SignIn from '../common/signIn/SignIn';
import Brand from '../admin/branding/brand/Brand';
import { Route, Switch } from "react-router-dom";


const Body = () => {
  return (
    <div className={styles["app-body"]}>
      <Switch>
        <Route path='/admin/user' exact component={UserAdminConsole} />
        <Route path='/admin' exact component={AdminConsole} />
        <Route path='/admin/user/new' exact component={AddUser} />
        <Route path='/admin/user/importExport' exact component={ImportExportUsers} />
        <Route path='/admin/user/update' exact component={updateUser} />
        <Route path='/admin/user/info' exact component={InfoUsers} />
        <Route path='/admin/performance' exact component={PerformanceConsole} />
        <Route path='/admin/branding' exact component={Brand} />
        <Route path="/" exact component={SignIn}/>
        <Route path='/profile' exact component={Profile}/>
        <Route path='/admin/user/import-export' exact component={ImportExportUsers} />


      </Switch>
    </div>
  );
};

export default Body;
