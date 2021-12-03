import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Title from '../Title'
import Input from './Input'


const ContentTask = () => {
    const dispatch = useDispatch()
    const selectItem = useSelector(state => state.selectTaskReducer.selected)
    const editModeContent = useSelector(state => state.contentTaskReducer.editMode);
    const editModeName = useSelector(state => state.taskReducer.editMode);
    let tasks = useSelector(state => state.taskReducer.tasks);

    const openEdior = (type, payload) => {
        dispatch({ type: type, payload: !payload })
    }

    return (
        <Fragment>
            {tasks.length !== 0 ?
                <Fragment>
                    <div className="todo-head">
                        {editModeName ?

                            <Input value={selectItem.name} editModeContent={editModeContent} selectItem={selectItem} /> :
                            <Title name={selectItem ? selectItem.name : 'no task'}></Title>}
                        <div onClick={() => openEdior('EDIT_MODE_NAME', editModeName)} className="edit"><img src="./edit.png" alt="edit-icon" /></div>
                    </div>
                    <div className='todo-content'>
                        <div className="todo__rightSide-content">
                            {editModeContent
                                ?
                                <Input value={selectItem.content}  editModeContent={editModeContent} selectItem={selectItem} /> :
                                <span>{selectItem ? selectItem.content:''}
                                </span>
                            }
                        </div>
                        <div onClick={() => openEdior('EDIT_MODE_CONTENT', editModeContent)} className="edit"><img src="./edit.png" alt="edit-icon" /></div>
                    </div>

                </Fragment> :
                <div className="no-task">
                    <img src="./happiness.png" alt="smile" />
                    <span>Добавте свою первую задачу</span>
                </div>
            }
        </Fragment>
    )
}

export default ContentTask
