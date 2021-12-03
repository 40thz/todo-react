const defaultState = {
    tasks: [],
    editMode: false
}

export const taskReducer = (state = defaultState, action) => {


    switch (action.type) {

        case 'ADD_TASK':
            return ({ ...state, tasks: [...state.tasks, action.payload] })
        case 'REMOVE_TASK':
            return ({ ...state, tasks: action.payload })
        case 'EDIT_MODE_NAME':
            return { ...state, editMode: state.editMode = action.payload }
        default:

            return state
    }
}