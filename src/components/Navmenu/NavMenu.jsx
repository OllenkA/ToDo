import React from 'react';
import styles from'./NavMenu.module.css';
import { NavLink } from 'react-router-dom';
import home from '../../home.png';
import settings from '../../settings.png'



function NavMenu() {
    return (
        <div className={styles.nav}>
            <h1 className={styles.todo}>
                <div className={styles.circles}>
                    <div className={styles.circle}> </div>
                </div>
                {/*<img src={circle} alt='' className={styles.mainImg}/>*/}
                ToDo
            </h1>
            <h2 className={styles.wrap}>
                <img src={ home }  alt='' className={styles.img}/>
                <NavLink className={styles.navlink} to='/home' activeClassName={styles.active}>Home</NavLink>
            </h2>
            <h2 className={styles.wrap}>
                <img src={ settings }  alt='' className={styles.img}/>
                <NavLink className={styles.navlink} to='/settings' activeClassName={styles.active}>Settings</NavLink>
            </h2>
        </div>
    );
}

export default NavMenu;