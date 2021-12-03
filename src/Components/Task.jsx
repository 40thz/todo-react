import React from 'react'
import classnames from 'classnames'
import { useSelector, useDispatch } from 'react-redux'
import RemoveBtn from './RemoveBtn'
import { ADD_SELECT_TASK } from '../store/actions/selectTaskAction'

const Task = () => {

    const dispatch = useDispatch()
    const items = useSelector(state => state.taskReducer.tasks)
    const taskContents = useSelector(state => state.contentTaskReducer.tasksContents);
    const editModeContent = useSelector(state => state.contentTaskReducer.editMode);
    const editModeName = useSelector(state => state.taskReducer.editMode);


    const selectTask = (id) => {

        const filterItem = taskContents.filter(item => item.id === id)
        const filterItemName = items.filter(item => item.id === id)
        const obj = {id: filterItem[0].id,name: filterItemName[0].name,content: filterItem[0].content}
        
        if (editModeContent || editModeName) {
            return
        } else {
            if (filterItem.length) {
                dispatch(ADD_SELECT_TASK(obj))
            } else {
                return
            }
        }
    }
    return (
        <div>
            {
                items.map((item) =>
                    <div onClick={() => selectTask(item.id)} key={item.id} className={classnames('task', item.background)}>
                        <RemoveBtn id={item.id} />
                        {item.name}
                    </div>
                )
            }

        </div>
    )
}

export default Task
