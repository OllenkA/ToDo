import React from 'react';
import './App.css';
// import {Route} from 'react-router-dom';
import Header from "./components/Header/Header";
import NavMenu from "./components/Navmenu/NavMenu";
import Home from "./components/Home/Home";
import Settings from "./components/Settings/Settings";
import Form from "./components/Form/Form";
import {Route} from "react-router-dom";
// import Route from "react-router-dom/es/Route";




function App() {
    return <div className='App'>
        <Header/>
        <NavMenu/>
        <Route exact path='/home' render={ () => <Home />} />
        <Route path='/settings' render={ () => <Settings />} />
        <Route path='/form' render={ () => <Form />} />



    </div>
}

export default App;
