import React from 'react';
import styles from './MainPage.module.css';
import {NavLink} from "react-router-dom";


function MainPage() {

    return (
        <main className={styles.main}>
            <h1>HI!</h1>
            <h2>I am your private to do list.</h2>
            <h3>Here you can:</h3>
            <ul className={styles.list}>
                <li>Go to the page where you can look at all the tasks (click on a bookmark
                    <NavLink to='/home' className={styles.link}>
                        "HOME"
                    </NavLink>
                    )
                </li>
                <li>Go to the page where you can change settings (click on a bookmark
                    <NavLink to='/settings' className={styles.link}>
                        "SETTINGS"
                    </NavLink>
                    )
                </li>
                <li>Add name, description, status, priority to-do lists (with help button
                    <NavLink to='/form' className={styles.link}>
                        " + ADD To Do "
                    </NavLink>
                    )
                </li>
                <li>Return to this page (click on a bookmark
                    <NavLink to='/' className={styles.link}>
                        "ToDo"
                    </NavLink>
                    )
                </li>
                <li>Change name and status to-do lists
                    (you need to click on the title or on the content of the note)
                </li>
                <li>Delete, mark as completed and back to-do lists
                    (in each todo sheet on the right side there is a button with a cross to delete)
                </li>
            </ul>
            <h3>I wish fruitful cooperation!</h3>
        </main>
    );
}

export default MainPage;