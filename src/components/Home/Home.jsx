import React from 'react';
import styles from './Home.module.css';
import { connect } from 'react-redux';
import {addTaskAC, deleteTaskAC, updateTaskAC} from "../../Redux/reducer";
import Tasks from "../Tasks/Tasks";

function Home(props) {

    let tasksAssigned = props.tasks.filter(t => t.status === 'assigned').map(task => {
        return <Tasks key={task.id}
                      id={task.id} title={task.title} content={task.content}
                      priority={task.priority} status={task.status} date={task.date}
        />
    });

    let tasksCompleted = props.tasks.filter(t => t.status !== 'assigned').map(task => {
        return <Tasks key={task.id} id={task.id} title={task.title} content={task.content}
                              priority={task.priority} status={task.status} date={task.date}
        />
    });

    return (
        <div className={styles.home}>
            <h1>To Do {tasksAssigned.length !== 0?`(${tasksAssigned.length})`:
                <span className={styles.warn}>(Ooops...No tasks in progress)</span>}</h1>
            {tasksAssigned}
            <h1>Completed {tasksCompleted.length !== 0?`(${tasksCompleted.length})`:
        <span className={styles.warn}>(You have no completed tasks yet! We can add ToDo!)</span>}</h1>
            {tasksCompleted}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
    }

};
const mapDispatchToProps = (dispatch) => {
    return {
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);