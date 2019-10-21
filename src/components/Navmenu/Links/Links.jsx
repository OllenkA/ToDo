import React from 'react';
import styles from './Links.module.css';
import {NavLink} from 'react-router-dom';


function Links(props) {
    return (
        <h2 className={styles.wrap}>
            <NavLink className={styles.nav} to={`/${props.way}`} activeClassName={styles.active}>
                <img src={props.logo} alt='' className={styles.img}/>
                {props.way.toUpperCase()}
            </NavLink>
        </h2>
    );
}

export default Links;