import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const CreateContentTask = ({ setSelectTask, active }) => {
    const [inpValue, setInpValue] = React.useState();
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.taskReducer.tasks);

    const addContent = () => {
        const filterItemName = tasks.filter(item => item.id === tasks[tasks.length - 1].id)

        dispatch({
            type: 'ADD_TASK_CONTENT',
            payload: {
                id: tasks[tasks.length - 1].id,
                content: inpValue
            }
        })

        dispatch(
            {
                type: 'ADD_SELECT_TASK',
                payload: {
                    id: tasks[tasks.length - 1].id,
                    name: filterItemName[0].name,
                    content: inpValue
                }
            })
    }

    return (
        <Fragment>
            <div className="create__content">
                <div className="create__content-form">
                    <span>ADD TODO DESCRIPTION</span>
                    <input onChange={(e) => setInpValue(e.target.value)} type="text" place />

                    <div onClick={() => addContent()} className="todo__leftSide-addBtn">
                        ADD TASK
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default CreateContentTask
