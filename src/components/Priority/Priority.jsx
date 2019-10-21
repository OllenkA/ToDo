import React from 'react';
import styles from './Priority.module.css';

function Priority(props) {

    return <aside>
        {props.status === 'assigned' ?
            <article className={styles.priorityAndStatus}>
                    <section className={styles.priority}>
                        {props.priority === 'Middle' ? '' :
                            props.priority === 'High' ?
                                `↑ ${props.priority} Priority` :
                                `↓ ${props.priority} Priority`}
                    </section>
                &nbsp;
                <time className={styles.time}>{props.date}</time>
            </article> : <span className={styles.statusCompleted}>&#10004; Completed</span>}
    </aside>;
}

export default Priority;