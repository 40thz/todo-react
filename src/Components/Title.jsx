import React from 'react'

function Title({ name, secondname, styles }) {
    return (
        <div>
            <div style={styles} className="todo__leftSide-logo">
                {name} <span>{secondname}</span>
            </div>
        </div>
    )
}

export default Title
