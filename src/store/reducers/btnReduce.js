const defaultState = {
    status: false
}
export const btnReduce = (state = defaultState, action) => {
    
    
    switch (action.type) {
        
        case 'OPEN_PANEL' :
            return { ...state, status: state.status = action.payload }
            
        default:
           
            return state
    }
}