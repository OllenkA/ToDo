import React from 'react';
import styles from './ToDo.module.css';
import {NavLink} from "react-router-dom";

function ToDo() {
    return (
        <NavLink to='/' className={styles.todo}>
            <h1>
                ToDo
            </h1>
        </NavLink>
    );
}

export default ToDo;