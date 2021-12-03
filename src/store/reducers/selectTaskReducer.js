const defaultState = {
    selected: {}
}

export const selectTaskReducer = (state = defaultState, action) => {
    
    
    switch (action.type) {
        
        case 'ADD_SELECT_TASK':
            return (
                { ...state, selected: action.payload }
            )
        default:
           
            return state
    }
}