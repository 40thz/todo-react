import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Input = ({selectItem, editModeContent, value}) => {

    const dispatch = useDispatch()
    let tasks = useSelector(state => state.taskReducer.tasks);
    let taskContents = useSelector(state => state.contentTaskReducer.tasksContents);

    const editContent = (id, text) => {
        if (editModeContent) {
            taskContents = taskContents.map(item => {
                if (item.id === id) {
                    item.content = text
                }
                return item
            })
            selectItem.content = text
            dispatch({ type: 'REMOVE_TASK_CONTENT', payload: taskContents })
        } else {
            tasks = tasks.map(item => {
                if (item.id === id) {
                    item.name = text
                }
                return item
            })
            selectItem.name = text
            dispatch({ type: 'REMOVE_TASK', payload: tasks })
        }
    }

    return (
        <div>
            <input type="text" defaultValue={value} onChange={(e) => editContent(selectItem.id, e.target.value)} />
        </div>
    )
}

export default Input
