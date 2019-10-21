import React from 'react';
import styles from './NavMenu.module.css';
import home from '../../home.png';
import settings from '../../settings.png'
import Logo from "./Logo/Logo";
import Links from "./Links/Links";
import ToDo from "./ToDo/ToDo";


function NavMenu() {
    return <nav className={styles.nav}>
        <Logo/>
        <ToDo/>
        <Links logo={home} way={'home'}/>
        <Links logo={settings} way={'settings'}/>
    </nav>
}

export default NavMenu;