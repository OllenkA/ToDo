import React, {useState} from 'react';
import styles from './Home.module.css';
import { connect } from 'react-redux';
import {addTaskAC, deleteTaskAC, setTasksAC, updateTaskAC} from "../../Redux/reducer";
import Tasks from "../Tasks/Tasks";

function Home(props) {

    let tasksAssigned = props.tasks.filter(t => t.status === 'assigned').map(task => {
        return <Tasks key={task.id} id={task.id} title={task.title} content={task.content}
                              priority={task.priority} status={task.status}/>
    });

    let tasksCompleted = props.tasks.filter(t => t.status !== 'assigned').map(task => {
        return <Tasks key={task.id} id={task.id} title={task.title} content={task.content}
                              priority={task.priority} status={task.status}/>
    });

    return (
        <div className={styles.home}>
            <h1>To Do {`(${tasksAssigned.length})`}</h1>
            {tasksAssigned}
            <h1>Completed {`(${tasksCompleted.length})`}</h1>
            {tasksCompleted}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        editMode: state.editMode,
    }

}
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
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);