import React, {useState} from 'react';
import styles from './Tasks.module.css';
import {connect} from 'react-redux';
import {addTaskAC, deleteTaskAC, setTasksAC, updateTaskAC} from "../../Redux/reducer";
import circle from '../../circle.png';

function Tasks(props) {
    const [edit, editMode] = useState(false);
    // const [title, changeTitle] = useState(e.target.value);

    let onTitleChanged = (e) => {
        let text = e.target.value;
        props.updateTask(text);
    };

    return <div className={styles.tasks}>
        <div className={styles.small}>
            <small><b>
                {props.priority === 'Middle' ? '' :
                    props.priority === 'High' ?
                        `↑ ${props.priority} Priority` :
                        `↓ ${props.priority} Priority`}
            </b></small>
            &nbsp;
            <small>{new Date().toLocaleDateString()}</small>
        </div>
        <div className={styles.otherContent}>
            <div>
                <div className={styles.circle}>{props.title[0].toUpperCase()}</div>
            </div>
            <div className={styles.task}>
                <div className={styles.title}>
                    {edit ?
                        <input onBlur={() => {
                            editMode(!edit)
                        }}
                               name='change'
                               autoFocus={true}
                               value={props.newTitle}
                               onChange={onTitleChanged}/> :
                        <span onClick={() => {
                            editMode(!edit)
                        }}>
                    <b>{props.title}</b>
                </span>}
                    <button type='button'
                            className='btn btn-outline-danger btn-sm'
                            onClick={() => props.deleteTask(props.id)}>
                        &times;
                    </button>
                </div>
                <p className={styles.content}>
                    {props.content}
                </p>
            </div>

        </div>
    </div>;
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        newTitle: state.newTitle,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        // setTasks: (tasks) => {
        //     dispatch(setTasksAC(tasks));
        // },
        addTask: (taskId, newText) => {
            dispatch(addTaskAC(taskId, newText));
        },
        deleteTask: (taskId) => {
            dispatch(deleteTaskAC(taskId));
        },
        updateTask: (task) => {
            dispatch(updateTaskAC(task));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);