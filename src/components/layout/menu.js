import React from "react";

import "../layoutCss/menu.css";
import Logo from "./logo";
import Hamburger from "./hamburger";
import Navigation from "./navigation";
import { useEffect, useRef } from "react";

let useClickOutside = (handler) => {
    let hambRef = useRef();

    useEffect(() => {
        let hamburgerHandler = (event) => {
            if (!hambRef.current.contains(event.target)) {
                handler();
            }
        };
        document.addEventListener("mousedown", hamburgerHandler);
        return () => {
            document.removeEventListener("mousedown", hamburgerHandler);
        };
    });
    return hambRef;
};

function Menu() {
    window.onscroll = function () {
        var menu = document.getElementById("menu");
        var logo = document.getElementById("logo");

        if (window.pageYOffset > 100) {
            menu.style.position = "fixed";
            menu.style.top = 0;
            logo.style.width = "40%";
        } else {
            menu.style.position = "static";
            logo.style.width = "50%";
        }
        var screenWidth = window.innerWidth;
        if (screenWidth <= 1000) {
            var highMenu = document.getElementById("menu").height;
            var nav = document.getElementById("nav");
            nav.style.top = highMenu + "px";
        }
    };

    let hambRef = useClickOutside(() => {
        var nav = document.getElementById("nav");
        nav.classList.remove("navRight");
    });
    return (
        <div className="menu" id="menu">
            <Logo />
            <div className="hambNav" ref={hambRef}>
                <Hamburger />
                <Navigation />
            </div>
        </div>
    );
}

export default Menu;
