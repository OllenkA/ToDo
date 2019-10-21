import React from 'react';
import styles from './MainPage.module.css';


function MainPage() {

    return (
        <main className={styles.main}>
            <h1>HI!</h1>
            <h2>I am your private to do list.</h2>
            <h3>Here you can:</h3>
            <ul className={styles.list}>
                <li>Add name, description, status, priority to-do lists</li>
                <li>Change name and status to-do lists</li>
                <li>Delete, mark as completed and back to-do lists</li>
                {/*<li>Mark as completed to-do lists</li>*/}
            </ul>
        </main>
    );
}

export default MainPage;