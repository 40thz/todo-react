const defaultState = {
    tasksContents: [],
    editMode: false,
}

export const contentTaskReducer = (state = defaultState, action) => {


    switch (action.type) {

        case 'ADD_TASK_CONTENT':
            return ({ ...state, tasksContents: [...state.tasksContents, action.payload] })
        case 'REMOVE_TASK_CONTENT':
            return ({...state, tasksContents: action.payload })
        case 'EDIT_MODE_CONTENT':
            return { ...state, editMode: state.editMode = action.payload }
        default:

            return state
    }
}