import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_TASK_CONTENT, ADD_SELECT_TASK } from '../../store/actions'

const CreateContentTask = () => {
    const [inpValue, setInpValue] = React.useState();
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.taskReducer.tasks);

    const filterItemName = tasks.filter(item => item.id === tasks[tasks.length - 1].id)
    const addedObj = {id: tasks[tasks.length - 1].id,content: inpValue}
    const addedSelectedObj =  {id: tasks[tasks.length - 1].id,name: filterItemName[0].name,content: inpValue}
   
    const addContent = () => {
        dispatch(ADD_TASK_CONTENT(addedObj))
        dispatch(ADD_SELECT_TASK(addedSelectedObj))
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
