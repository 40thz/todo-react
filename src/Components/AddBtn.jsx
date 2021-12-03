import React from 'react'
import AddPanel from './AddPanel'
import { useSelector, useDispatch } from 'react-redux'
import { OPEN_PANEL } from '../store/actions/btnAction'

const AddBtn = ({ name, bgColours, setTask, tasks }) => {

    const dispatch = useDispatch()
    const status = useSelector(state => state.btnReduce.status)
    
    return (
        <div>
            <div onClick={() => dispatch(OPEN_PANEL(!status)) } className="todo__leftSide-addBtn">
                {name}
            </div>

            <AddPanel tasks={tasks} setTask={setTask} bgColours={bgColours} isOpen={status}/>
        </div>
        
    )
}

export default AddBtn
