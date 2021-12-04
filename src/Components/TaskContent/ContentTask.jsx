import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Input from './Input'
import ContentTaskTitle from './ContentTaskTitle'
import EditBtn from './EditBtn'
import { EDIT_MODE_CONTENT } from '../../store/actions'

const ContentTask = () => {
    const dispatch = useDispatch()
    const selectItem = useSelector(state => state.selectTaskReducer.selected)
    const editModeContent = useSelector(state => state.contentTaskReducer.editMode);
    let tasks = useSelector(state => state.taskReducer.tasks);

    const openEdior = (type, payload) => {
        dispatch({ type: type, payload: !payload })
    }

    return (
        <Fragment>
            {tasks.length !== 0 ?
                <Fragment>
                    <ContentTaskTitle openEdior={openEdior} value={selectItem.name} editModeContent={editModeContent} selectItem={selectItem}/>
                    <div className='todo-content'>
                        <div className="todo__rightSide-content">
                            {editModeContent
                                ?
                                <Input value={selectItem.content} editModeContent={editModeContent} selectItem={selectItem} /> :
                                <span>{selectItem ? selectItem.content : ''}
                                </span>
                            }
                        </div>
                       <EditBtn type={EDIT_MODE_CONTENT} payload={editModeContent} />
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
