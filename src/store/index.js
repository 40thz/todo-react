import { createStore, combineReducers } from 'redux'
import { btnReduce } from './reducers/btnReduce'
import { taskReducer } from './reducers/taskReducer'
import { contentTaskReducer } from './reducers/contentTaskReducer'
import { selectTaskReducer } from './reducers/selectTaskReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
    btnReduce,
    taskReducer,
    contentTaskReducer,
    selectTaskReducer,
});
const persistedData = localStorage.getItem('todoReactData') ? JSON.parse(localStorage.getItem('todoReactData')) : {}

export const store = createStore(rootReducer, persistedData, composeWithDevTools())

store.subscribe(() => {
   localStorage.setItem('todoReactData', JSON.stringify(store.getState()))
})
