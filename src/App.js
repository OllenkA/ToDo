import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavMenu from "./components/Navmenu/NavMenu";
import Home from "./components/Home/Home";
import Settings from "./components/Settings/Settings";
import Form from "./components/Form/Form";
import {Route} from "react-router-dom";
import { useSelector } from 'react-redux'
import MainPage from "./components/MainPage/MainPage";


function App() {
    const isHidden = useSelector(state => state.isHiddenNavMenu);
    const hide = isHidden?'app':'App';
    return <main className={hide}>
        <Header/>
        {!isHidden ? <NavMenu/>: ''}
        <Route exact path='/' render={ () => <MainPage />} />
        <Route exact path='/home' render={ () => <Home />} />
        <Route path='/settings' render={ () => <Settings />} />
        <Route path='/form' render={ () => <Form />} />
    </main>
}

export default App;
