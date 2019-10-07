import React from 'react';
import styles from './Priority.module.css';

function Priority(props) {

    return <div>
        {props.status === 'assigned' ?
            <div className={styles.priority}>
                <small>
                    <b>
                        {props.priority === 'Middle' ? '' :
                            props.priority === 'High' ?
                                `↑ ${props.priority} Priority` :
                                `↓ ${props.priority} Priority`}
                    </b>
                </small>
                &nbsp;
                <small>{props.date}</small>
            </div> : <span className={styles.statusCompleted}>&#10004; Completed</span>}
    </div>;
}

export default Priority;