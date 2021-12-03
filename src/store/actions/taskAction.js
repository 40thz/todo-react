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