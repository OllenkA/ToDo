import React, {useState} from 'react';
import styles from '../Tasks/Tasks.module.css';
import {connect} from 'react-redux';
import {addTaskAC, deleteTaskAC, setTasksAC, updateTaskAC} from "../../Redux/reducer";


function Form (props) {

    return <div className={styles.tasks}>
        hi
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

export default connect(mapStateToProps, mapDispatchToProps)(Form);