import React from 'react';
import styles from './Tasks.module.css';
import Priority from "../Priority/Priority";
import Title from "../Title/Title";

function Tasks(props) {

    return <div className={styles.container}>
        <Priority id={props.id} priority={props.priority} status={props.status}/>
        <Title id={props.id} title={props.title} content={props.content} status={props.status}/>
    </div>;
}

export default Tasks;