import classNames from 'classnames'
import React, { Fragment } from 'react'

const Color = ({items, setColorBG}) => {
    return (
        <Fragment>
            {items.map((item, index) =>
                <div onClick={() => setColorBG(item)} key={index} className={classNames('gradient', item)}></div>
            )}
        </Fragment>
    )
}

export default Color
