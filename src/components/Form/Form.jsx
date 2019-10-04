import React, {useState} from 'react';
import styles from './Form.module.css';
import {connect} from 'react-redux';
import {addTodoAC} from "../../Redux/reducer";
import Home from "../Home/Home";
import {NavLink} from "react-router-dom";


function Form(props) {

    const [title, createTitle] = useState('');
    const [content, createContent] = useState('');

    const addTitle = (e) => {
        createTitle(e.target.value);
    };

    const addContent = (e) => {
        createContent(e.target.value);
    };

    const addTodoList = (title, content) => {
        props.addTodo(title, content);
        return <Home/>
    };

    const displayWarning = () => {
        debugger;
        return alert('Enter Title, please!')
    };


    return <div className={styles.container}>
        <h2>MY NEW TODO</h2>
            <fieldset>
                <legend>TITLE:</legend>
                <input onChange={addTitle}/>
            </fieldset>
            <fieldset>
                <legend>CONTENT:</legend>
                <textarea onChange={addContent}/>
            </fieldset>
            <fieldset>
                <legend>PRIORITY:</legend>
                <label>Low: <input type='radio' name='priority' value='Low'/></label>
                <label>Middle: <input type='radio' name='priority' value='Middle'/></label>
                <label>High: <input type='radio' name='priority' value='High'/></label>
            </fieldset>
            <fieldset>
                <legend>STATUS:</legend>
                <label>To Do: <input type='radio' name='status' value='assigned'/></label>
                <label>Completed: <input type='radio' name='status' value='completed'/></label>
            </fieldset>
            <fieldset>
                <NavLink to='/home'>
                  <button onClick={title !== '' && content !== ''?
                      () => addTodoList(title, content):() => displayWarning}>
                    Create To Do
                  </button>
                </NavLink>
            </fieldset>

    </div>
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (title, content) => {
            dispatch(addTodoAC(title, content));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);