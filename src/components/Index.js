import React from "react";


import Header from "./layout/Header";
import Home from "./HomePage/Home";
import About from "./AboutPage/About";
import Offer from "./OfferPage/Offer";
import Projects from "./ProjectsPage/Projects";
import Contact from "./ContactPage/Contact";
import CookieWarn from "./layout/cookie";

//import {Router, Routes, Route } from "react-router-dom";
 import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
//import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Footer from "./layout/Footer";
import "./Index.css";

import { createBrowserHistory } from "history";
import "./i18n";
 
const Index = () =>{

    const history = createBrowserHistory();

   

// i18n
// .use (translate)
// .init({
//     interpolation: { escapeValue: false },  // React already does escaping 
//     lng:'pl',                            // language to use
//     resources: {
//         en: {
//             common: en          // 'common' is our custom namespace
//         },
//         de: {
//             common: pl
//         },
//     },
// });
   

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
// const container = document.getElementById('root');

// // Create a root.
// const root = ReactDOM.createRoot(container);

// // Initial render
// root.render(<Index />);







// const root = ReactDOM.createRoot(
//     document.getElementById("root")
//   );
//   root.render(
//     <React.StrictMode>
//    <Index  />

//     </React.StrictMode>
//   );
  


// const rootElement = document.getElementById('root');
// let root =root.render(rootElement);

// root.render(
//     <StrictMode>
//       <Index  />
//     </StrictMode>,
//   );


// const root = ReactDOM.createRoot(
//     document.getElementById("root")
// //   );
//   root.render(<Index />);
// const root = ReactDOM.createRoot(
//     document.getElementById('root')
//   );
//   root.render(
     
//         <Index />
// );
    
// root.render(
//   <React.StrictMode>
//     <Index />
//   </React.StrictMode>
// );

export default Index;
