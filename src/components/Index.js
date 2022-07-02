import React from "react";


import Header from "./layout/Header";
import Home from "./HomePage/Home";
import About from "./AboutPage/About";
import Offer from "./OfferPage/Offer";
import Projects from "./ProjectsPage/Projects";
import Contact from "./ContactPage/Contact";
import CookieWarn from "./layout/cookie";

 import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

import Footer from "./layout/Footer";
import "./Index.css";

import { createBrowserHistory } from "history";
import "./i18n";
 
const Index = () =>{

    const history = createBrowserHistory();


    return (
        <Router history={history}>
            <div className="container">
                <Header />

                <Routes>
                    <Route exact path="/" element={<Home />}>
                        
                    </Route>

                    <Route exact path="/Onas" element={<About />}>
                    
                    </Route>
                    <Route exact path="/Oferta" element={<Offer />}>
                       
                    </Route>

                    <Route exact path="/Kontakt" element={<Contact />}>
                       
                    </Route>

                    <Route exact path="/Projekty" element={<Projects />}>
                       
                    </Route>
                   
                    <Route exact path="/About" element={<About />}>
                       
                    </Route>
                    <Route exact path="/Offer" element={<Offer />}>
                       
                    </Route>
                    <Route exact path="/Contact" element={<Contact />}>
                        
                    </Route>
                    <Route exact path="/Projects" element={<Projects />}>
                        
                    </Route>
                </Routes>

                <CookieWarn />
                <Footer />
            </div>
        </Router>
    );
}

export default Index;
