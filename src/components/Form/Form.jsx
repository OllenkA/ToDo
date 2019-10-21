import React, {useState} from 'react';
import styles from './Form.module.css';
import {connect} from 'react-redux';
import {addTodoAC} from "../../Redux/reducer";
import Home from "../Home/Home";
import {NavLink} from "react-router-dom";


function Form(props) {

    const [title, createTitle] = useState('');
    const [content, createContent] = useState('');
    const [priority, createPriority] = useState('');
    const [status, createStatus] = useState('');

    const addTitle = (e) => {
        createTitle(e.target.value);
    };

    const addContent = (e) => {
        createContent(e.target.value);
    };

    const addTodoList = () => {
        props.addTodo(title, content, priority, status, new Date().toLocaleDateString());
        return <Home/>
    };

    const displayWarning = () => {
        return alert('Enter Title, please!')
    };

    const sendPriority = (e) => {
        createPriority(e.target.value);
    };

    const sendStatus = (e) => {
        createStatus(e.target.value);
    };

    return <main className={styles.container}>
        <h2>MY NEW TODO</h2>
            <fieldset>
                <legend>TITLE:</legend>
                <input className={styles.textContent} onChange={addTitle} placeholder={'Please, enter title task...'}/>
            </fieldset>
            <fieldset>
                <legend>CONTENT:</legend>
                <textarea className={styles.textContent} onChange={addContent} placeholder={'Please, enter description your task...'}/>
            </fieldset>
            <fieldset>
                <legend>PRIORITY:</legend>
                <label>Low: <input type='radio'
                                   onChange={sendPriority}
                                   name='priority'
                                   value='Low'/>
                </label>
                <label>Middle: <input type='radio'
                                      onChange={sendPriority}
                                      name='priority' value='Middle'/>
                </label>
                <label>High: <input type='radio'
                                    onChange={sendPriority}
                                    name='priority' value='High'/></label>
            </fieldset>
            <fieldset>
                <legend>STATUS:</legend>
                <label>To Do: <input type='radio'
                                     onChange={sendStatus}
                                     name='status' value='assigned'/></label>
                <label>Completed: <input type='radio'
                                         onChange={sendStatus}
                                         name='status' value='completed'/></label>
            </fieldset>
            <fieldset>
                <NavLink to='/home'>
                  <button onClick={title !== '' && content !== ''?
                      () => addTodoList(title, content):() => displayWarning}>
                    Create To Do
                  </button>
                </NavLink>
            </fieldset>

    </main>
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (title, content, priority, status, date) => {
            dispatch(addTodoAC(title, content, priority, status, date));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);