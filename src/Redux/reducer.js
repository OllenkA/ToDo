export const SET_TASKS = 'SET-TASKS';
export const UPDATE_TASK = 'UPDATE-TASK';
export const ADD_TASK = 'ADD-TASK';
export const DELETE_TASK = 'DELETE-TASK';
export const ADD_TODO = 'ADD-TODO';
export const CHANGE_STATUS = 'CHANGE-STATUS';
export const UPDATE_CONTENT = 'UPDATE-CONTENT';
export const HIDDEN_NAV_MENU = 'HIDDEN_NAV_MENU';


const initialState = {
    tasks: [
        {id: 1, title: 'Buy cake', priority: 'Middle', status: 'completed',
            content: 'I need buy cake with strawberry for my mother 14.10.2019.',
            date: '12.09.2019'},
        {id: 2, title: 'Learn React', priority: 'High', status: 'assigned',
            content: 'I must look one video every day.',
            date: '19.09.2019'},
        {id: 3, title: 'Find lessons to dance', priority: 'Middle', status: 'completed',
            content: 'I want to find school dance nearly my home and with good teachers.',
            date: '20.09.2019'},
        {id: 4, title: 'Choose the dress on New Year party', priority: 'Low', status: 'assigned',
            content: 'I must find a good dress on New Year party before 15.12.2019',
            date: '29.09.2019'},
        // {id: 5, title: 'Learn Typescript', priority: 'Low', status: 'assigned',
        //     content: 'ciuabdcjbasboabdxoawnkdnaodnksnlcnasknhdsadhnashdnakjshdjsa',
        //     date: '01.10.2019'},
    ],
    isHiddenNavMenu: false,
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case UPDATE_TASK:
            let newTasks = state.tasks.map(el => {
                if(el.id !== action.id){
                    return el
                } else {
                    return {
                        ...el,
                        title: action.title === ''?'':action.title[0].toUpperCase() + action.title.slice(1),
                    }
                }
            });
            return {
                ...state,
                tasks: newTasks,
            };

        case UPDATE_CONTENT:
            let newContent = state.tasks.map(el => {
                if(el.id !== action.id){
                    return el
                } else {
                    return {...el, content: action.content}
                }
            });
            return {
                ...state,
                tasks:  newContent,
            };

        case ADD_TODO:
            let maxId = state.tasks.reduce((acc, task) => {
                if(task.id > acc){
                    acc = task.id
                }
                return acc;
            },0);
            let newObj = {
                id: maxId + 1,
                title: action.title === ''?'':action.title[0].toUpperCase() + action.title.slice(1),
                content: action.content[0].toUpperCase() + action.content.slice(1),
                priority: action.priority === ''?'Low':action.priority,
                status: action.status === ''?'assigned':action.status,
                date: action.date,
            };
            return {
                ...state,
                tasks: [...state.tasks, newObj]
            };

        case CHANGE_STATUS:
            let newStatus = state.tasks.map(el => {
                if(el.id !== action.id){
                    return el
                } else {
                    return {
                        ...el,
                        status: action.status === 'assigned'?'completed':'assigned',
                    }
                }
            });
            return {
                ...state,
                tasks: newStatus,
            };

        case DELETE_TASK:
            let newArrayTasks = state.tasks.filter(el => {
                return el.id !== action.taskId
            });
            return {
                ...state,
                tasks: newArrayTasks
            };

        case HIDDEN_NAV_MENU:
            return {...state, isHiddenNavMenu: !state.isHiddenNavMenu};

        default:
            return state;
    }

};

export const addTaskAC = (title) => ({ type: ADD_TASK, title});

export const changeHiddenNavMenuAC = () => ({ type: HIDDEN_NAV_MENU});

export const deleteTaskAC = (taskId) => ({ type: DELETE_TASK, taskId});

export const updateTaskAC = (id, title) => ({type: UPDATE_TASK, id, title});

export const addTodoAC = (title, content, priority, status, date) => ({type: ADD_TODO, title, content,
    priority, status,date});

export const changeStatusAC = (id, status) => ({type: CHANGE_STATUS, id, status});

export const updateContentAC = (id, content) => ({type: UPDATE_CONTENT, id, content});


export default reducer;