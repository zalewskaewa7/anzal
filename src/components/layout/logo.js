import React from 'react';
import logo from '../layoutImg//logoANZAL-removebg-preview.png'
import "../layoutCss/logo.css" ;

function Logo() {
    return(
<div className ="logo">
<img  id="logo" src={logo} alt="logo ANZAL" />

</div>
);

    
}

export default Logo;
