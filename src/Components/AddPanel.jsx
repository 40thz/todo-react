import classNames from 'classnames'
import React from 'react'
import Color from './Color'
import Title from './Title'
import { OPEN_PANEL } from '../store/actions/btnAction'
import { ADD_TASK } from '../store/actions/taskAction'
import { useDispatch, useSelector } from 'react-redux'

const AddPanel = ({ isOpen, bgColours, tasks }) => {
    const [nameTask, setNameTask] = React.useState('');
    const [colorBG, setColorBG] = React.useState('');
    const dispatch = useDispatch()
    const tasksList = useSelector(state => state.taskReducer.tasks);
    const taskContents = useSelector(state => state.contentTaskReducer.tasksContents);
    
    const taskObj = {
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
        name: nameTask,
        background: colorBG
    }

    const addTask = () => {
        if (tasksList.length !== taskContents.length) {
            return
        } else {
            dispatch(ADD_TASK(taskObj))
            dispatch(OPEN_PANEL(false))
        }
    }
    return (
        <div>
            <div className={classNames('addTask-panel', isOpen ? 'open-panel' : '')}>
                <Title name="add" secondname="panel"> </Title>
                <div className="addTask-panel-taskName">
                    <input onChange={(e) => setNameTask(e.target.value)} placeholder="name" type="text" />
                </div>
                <div className="addTask-panel-gradient">
                    <Color setColorBG={setColorBG} items={bgColours} />
                </div>
                <div onClick={() => addTask(nameTask, colorBG)} className="todo__leftSide-addBtn">
                    ADD TASK
                </div>
            </div>
        </div>
    )
}

export default AddPanel
