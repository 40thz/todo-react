import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { REMOVE_TASK } from '../store/actions/taskAction'
import { REMOVE_TASK_CONTENT } from '../store/actions/contentTaskAction'
import { ADD_SELECT_TASK } from '../store/actions/selectTaskAction'

const RemoveBtn = ({ id }) => {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.taskReducer.tasks);
    const taskContents = useSelector(state => state.contentTaskReducer.tasksContents);

    const removeElement = (e, Elemid) => {
        const filterArr = tasks.filter(item => item.id !== Elemid)
        const filterArrContent = taskContents.filter(item => item.id !== Elemid)
        const defaultTask = { id: filterArr[0].id, name: filterArr[0].name, content: filterArrContent[0].content }
        dispatch(REMOVE_TASK(filterArr))
        dispatch(REMOVE_TASK_CONTENT(filterArrContent))
        if (filterArr.length !== 0) {
            dispatch(ADD_SELECT_TASK(defaultTask))
        } else {
            dispatch(ADD_SELECT_TASK({}))
        }
        e.stopPropagation();
    }

    return (
        <Fragment>
            <div onClick={(e) => removeElement(e, id)} className="task-remove">
                <img src="./close.png" alt="" />
            </div>
        </Fragment>
    )
}

export default RemoveBtn
