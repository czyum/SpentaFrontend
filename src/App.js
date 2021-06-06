import './App.css';
import {BrowserRouter,Route, Switch,} from "react-router-dom";
import axios from 'axios';
import React, {useState} from 'react';
import ChatApp from "./components/Chats/ChatApp/ChatApp";
import BaseApp from './components/platform/baseApp/BaseApp';

const App=()=>(
    <div className="app">
      {/* <Header/> */}
      <Switch>
      <Route path="/chat" component={ChatApp}/>
      <Route path="/" component={BaseApp}/>
      </Switch>
      </div>
)

export default App;
