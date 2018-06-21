import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Clients from "./components/Clients/index";
import Footer from "./components/Footer/index";
import Skill from "./components/Skill/index";
import Process from "./components/Process/index";
import MapLocation from "./components/MapLocation/index";
import Header from "./components/Header/index";
import Login from "./components/Login/index";

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Home/>
                <About/>
                <Portfolio/>
                <Skill/>
                <Clients/>
                <Services/>
                <Process/>
                <ContactUs/>
                <MapLocation/>
                <Footer/>
                <Login/>

            </div>
        );
    }
}
export default App;
