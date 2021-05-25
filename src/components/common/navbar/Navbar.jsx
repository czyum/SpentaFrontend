import React from 'react';
import {Link,BrowserRouter,NavLink} from "react-router-dom";

import SearchField from "react-search-field";
import './Navbar.css'

function Navbar () {

  return (
    
    <section className="navbar">
      
      <NavLink to="/admin" style={{
        margin:"20px",
        color:'orange',
      }}>ADMIN</NavLink>

      <Link to="/admin/home" style={{
        margin:"20px",
        color:'orange',
      }} >HOME</Link>

      <Link to="/admin/about" style={{
        margin:"20px",
        color:'orange',
      }} >ABOUT</Link>

      <Link to="/student"style={{
        margin:"20px",
        color:'orange',
      }} >STUDENT LOGIN</Link>

      <Link to="/admin/scloership info"style={{
        margin:"20px",
        color:'orange',
      }} >SCOLERSHIP INFO</Link>

      <Link to="/admin/contact"style={{
        margin:"20px",
        color:'orange',
      }} >CONTACT</Link>
      
      <SearchField
  placeholder="Search..."

  classNames="test-class"
/>
     
  </section>
  )

}

export default Navbar; 