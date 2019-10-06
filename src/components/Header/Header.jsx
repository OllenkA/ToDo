import React from 'react';
import styles from './Header.module.css';
import menu from '../../menu.png';
import Form from "../Form/Form";
import {NavLink} from "react-router-dom";
import {changeHiddenNavMenuAC} from "../../Redux/reducer";
import {connect} from 'react-redux';




function Header(props) {

        let addTodo = () => {
            return <Form/>
        };

        let onClickImg = () => {
            props.changeHiddenNavMenuAC();
        };

        return <div className={styles.header}>
            <img src={menu} alt='' className={styles.img} onClick={onClickImg}/>

            <div className={styles.add}>
                <NavLink className={styles.navk} to='/form'>
                    <button className={styles.but} onClick={addTodo}>+ Add To Do</button>
                </NavLink>
            </div>
        </div>;
}

export default connect(null, {changeHiddenNavMenuAC})(Header);