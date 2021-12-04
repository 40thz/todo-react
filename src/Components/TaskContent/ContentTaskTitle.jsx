import React from 'react'
import Title from '../Title'
import Input from './Input'
import EditBtn from './EditBtn'
import { useSelector } from 'react-redux'
import { EDIT_MODE_NAME } from '../../store/actions'

const ContentTaskTitle = ({selectItem, editModeContent, value }) => {
    const editModeName = useSelector(state => state.taskReducer.editMode);
    return (
        <div>
            <div className="todo-head">
                {editModeName
                    ?
                    <Input value={value} editModeContent={editModeContent} selectItem={selectItem} />
                    :
                    <Title name={selectItem.name}></Title>
                }
                <EditBtn type={EDIT_MODE_NAME} payload={editModeName} />
            </div>
        </div>
    )
}

export default ContentTaskTitle
