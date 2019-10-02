export const SET_TASKS = 'SET-TASKS';
export const UPDATE_TASK = 'UPDATE-TASK';
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE-TASK';

const initialState = {
    tasks: [
        {id: 1, title: 'Learn JS', content: 'ciuabdcjbasboabdxoawnkdnaodnksnlcnasknhdsadhnashdnakjshdjsa',
            priority: 'Low', status: 'completed'},
        {id: 2, title: 'Buy cake', content: 'ciuabdcjbasboabdxoawnkdnaodnksnlcnasknhdsadhnashdnakjshdjsa',
            priority: 'High', status: 'assigned'},
        {id: 3, title: 'Learn CSS',content: 'ciuabdcjbasboabdxoawnkdnaodnksnlcnasknhdsadhnashdnakjshdjsa',
            priority: 'Middle', status: 'completed'},
        {id: 4, title: 'Learn React',content: 'ciuabdcjbasboabdxoawnkdnaodnksnlcnasknhdsadhnashdnakjshdjsa',
            priority: 'High', status: 'assigned'},
        {id: 5, title: 'Learn HTML',content: 'ciuabdcjbasboabdxoawnkdnaodnksnlcnasknhdsadhnashdnakjshdjsa',
            priority: 'Low', status: 'completed'},
        {id: 6, title: 'Find lessons to dance',content: 'ciuabdcjbasboabdxoawnkdnaodnksnlcnasknhdsadhnashdnakjshdjsa',
            priority: 'High', status: 'assigned'},
        {id: 7, title: 'Learn Redux',content: 'ciuabdcjbasboabdxoawnkdnaodnksnlcnasknhdsadhnashdnakjshdjsa',
            priority: 'Middle', status: 'completed'},
        {id: 8, title: 'Learn Typescript',content: 'ciuabdcjbasboabdxoawnkdnaodnksnlcnasknhdsadhnashdnakjshdjsa',
            priority: 'High', status: 'assigned'},
    ],
    newTitle: '',
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_TASKS:
            return {
                ...state,
                tasks: [...action.tasks, ...state.tasks]
            };

        case UPDATE_TASK:
            // let newTasks = state.tasks.map(el => {
            //     if(el.id === action.task.id){
            //         return action.task
            //     } else {
            //         return el
            //     }
            // });
            return {
                ...state,
                // tasks: newTasks,
                newTitle: action.task,
            };

        case ADD_TASK:
            // let newTasksArray = [action.task, ...state.tasks]
            let obj = {
                id: state.tasks.length + 1,
                title: state.newTitle,
                priority: 'Low',
                status: 'assigned'
            };
            return {
                ...state,
                tasks: [...state.tasks, obj],
                newTitle: '',
            };

        case DELETE_TASK:
            let newArrayTasks = state.tasks.filter(el => {
                return el.id !== action.taskId
            });
            return {
                ...state,
                tasks: newArrayTasks
            };

        default:
            return state;
    }

};

export const addTaskAC = (task) => ({ type: ADD_TASK, task});

export const deleteTaskAC = (taskId) => ({ type: DELETE_TASK, taskId});

export const setTasksAC = (tasks) => ({type: SET_TASKS, tasks: tasks});

export const updateTaskAC = (task) => ({type: UPDATE_TASK, task: task});


export default reducer;