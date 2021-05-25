import React from 'react';
import { Navbar } from '../../common' ;

import './Header.css';

function Header () {

  return (
    
    <section className="header">
      <section className="header-top">
        
        <section className="header-top__navbar">
          <section className="header-top__navigation">
            <Navbar />
          </section>
          <hr className="header-top__seperator" />
        </section>
        
      </section>
      <section className="header-bottom">
        <section className="header-bottom__phone">
          080-27230312  
        </section>
        <section className="header-bottom__email">
          spentanfo@gmail.com
        </section>
      </section>
    </section>
  )
}

export default Header; 