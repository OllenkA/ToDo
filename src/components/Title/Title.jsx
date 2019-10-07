import React, {useState} from 'react';
import styles from './Title.module.css';
import {connect} from 'react-redux';
import {changeStatusAC, deleteTaskAC, updateContentAC, updateTaskAC} from "../../Redux/reducer";
import Content from "../Content/Content";

function Title(props) {

    const [edit, editMode] = useState(false);

    let onTitleChanged = (e) => {
        let text = e.target.value;
        props.updateTask(props.id, text);
    };

    let changeStatus = (id, status) => {
        props.changeStatus(id, status);
    };

    let onContentChange = (e) => {
        let text = e.target.value;
        props.updateContent(props.id, text);
    };

    return <div className={styles.container}>
        <div>
            <div className={styles.circle}>{props.title === '' ? '' : props.title[0].toUpperCase()}</div>
        </div>
        <div className={styles.task}>
            <div className={styles.title}>
                {edit ?
                    <input onBlur={() => {
                        editMode(!edit)
                    }}
                           autoFocus={true}
                           value={props.title}
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
            <Content id={props.id} content={props.content} status={props.status}
                     changeStatus={changeStatus} onContentChange={onContentChange}/>
        </div>
    </div>
}

const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTask: (taskId) => {
            dispatch(deleteTaskAC(taskId));
        },
        updateTask: (task, id) => {
            dispatch(updateTaskAC(task, id));
        },
        changeStatus: (id, status) => {
            dispatch(changeStatusAC(id, status));
        },
        updateContent: (id, content) => {
            dispatch(updateContentAC(id, content));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Title);