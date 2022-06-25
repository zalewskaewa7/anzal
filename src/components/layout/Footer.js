import React from 'react';

import "../layoutCss/Footer.css" ;

function Footer() {
    return(
<div className ="Footer">
Copyright &copy; {(new Date().getFullYear())} ANZAL

</div>
);

    
}

export default Footer;
