import React from 'react'
import { useDispatch } from 'react-redux'

const EditBtn = ({type, payload}) => {
    
    const dispatch = useDispatch()
    const openEdior = (type, payload) => {
        dispatch(type(!payload))
    }

    return (
        <div>
            <div onClick={() => openEdior(type, payload)} className="edit"><img src="./edit.png" alt="edit-icon" /></div>
        </div>
    )
}

export default EditBtn
