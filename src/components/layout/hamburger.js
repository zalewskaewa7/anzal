import "../layoutCss/hamburger.css";
import React from "react";

function Hamburger() {
    function hamburger() {
        var nav = document.getElementById("nav");
        nav.classList.toggle("navRight");
    }

    return (
        <div className="hamburger">
            <div className="bars" onClick={hamburger}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
        </div>
    );
}

export default Hamburger;
