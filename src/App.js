import './App.css';
import {BrowserRouter,Route,} from "react-router-dom";
import axios from 'axios';
import React, {useState} from 'react';
import ChatApp from "./components/Chats/ChatApp/ChatApp";
import Header from "./components/common/header/Header";

const App=()=>(
    <div className="app">
      {/* <Header/> */}
      <Route path="/chat" component={ChatApp}/>
      </div>
)

export default App;
