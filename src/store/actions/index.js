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
export const ADD_TASK = (array) => ({
    type: 'ADD_TASK',
    payload: array
})

export const REMOVE_TASK = (obj) => ({
    type: 'REMOVE_TASK',
    payload: obj
})

export const EDIT_MODE_NAME = (boolen) => ({
    type: 'EDIT_MODE_NAME',
    payload: boolen
})
export const ADD_SELECT_TASK = (obj) => ({
    type: 'ADD_SELECT_TASK',
    payload: obj
})
export const OPEN_PANEL = (boolen) => ({
    type: 'OPEN_PANEL',
    payload: boolen
})