import React from 'react';
import styles from './Logo.module.css';


function Logo() {
    return <figure className={styles.logo}>
        <div className={styles.circle}/>
    </figure>
}

export default Logo;