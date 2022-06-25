import React from 'react';
 

import "../layoutCss/Header.css" ;
import ContactBar from './contact_bar';
import Menu from './menu';

function Header() {
    return(
<div className ="Header">
    <header>
        <ContactBar />
        <Menu />
    </header>
       
</div>
);

    
}

export default Header;
