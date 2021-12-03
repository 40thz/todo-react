export const ADD_TASK_CONTENT = (array) => ({
    type: 'ADD_TASK_CONTENT',
    payload: array
})

export const REMOVE_TASK_CONTENT = (obj) => ({
    type: 'REMOVE_TASK_CONTENT',
    payload: obj
})

export const EDIT_MODE_CONTENT = (boolen) => ({
    type: 'EDIT_MODE_CONTENT',
    payload: boolen
})