import React, {useState} from 'react';
import styles from './Content.module.css';

function Content (props) {

    const [editContent, editModeContent] = useState(true);

    return <div className={styles.container}>
        {editContent ? <p onClick={() => {
                editModeContent(!editContent)
            }} className={styles.content}>
                {props.content}</p> :
            <textarea className={styles.text} onBlur={() => {
                editModeContent(!editContent)
            }}
                      autoFocus={true}
                      value={props.content}
                      onChange={props.onContentChange}/>}
        <button className={styles.changeStatus} type='button'
                onClick={() => props.changeStatus(props.id, props.status)}>
            <small>
                {props.status === 'assigned' ? 'Mark as completed' : 'Mark as not completed'}
            </small>
        </button>
    </div>
}

export default Content;