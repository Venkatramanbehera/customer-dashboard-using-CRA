import React from 'react'

const StatsItem = (props) => {
    const { value, name } = props
    return (
        <div>
            <h1>{ name } - { value }</h1>
        </div>
    )
}

export default StatsItem
