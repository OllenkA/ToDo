import React, {useState} from 'react';
import styles from './Header.module.css';
import menu from '../../menu.png';
import {connect} from "react-redux";
import {addTaskAC, updateTaskAC} from "../../Redux/reducer";
import Form from "../Form/Form";
import { NavLink } from 'react-router-dom';



function Header(props) {

        const [hide, isHidden] = useState(false);

        let addTitleTask = (e) => {
            let text = e.target.value;
            props.updateTask(text);
        };

        return <div className={styles.header}>
            <img src={menu} alt='' className={styles.img}/>
            <div>
                <button className={styles.but} onClick={() => {isHidden(!hide)}}>+ Add To Do</button>
                {hide?<Form/>: null}

                {/*// <button className={styles.but} onClick={()=>props.addTask()}>+ Add To Do</button>*/}
                <input onChange={addTitleTask}
                       className={styles.enter}
                       placeholder='Start writting ToDo... Please!'
                       value={props.newText}/>
            </div>
        </div>;
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        newText: state.newTitle,
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (newText) => {
            dispatch(addTaskAC( newText));
        },
        updateTask: (newTitle) => {
            dispatch(updateTaskAC(newTitle));
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);


