import React from 'react'

function title() {
    console.log('title component')
    return (
       
        <div>
            <h1>Use Call back example</h1>
        </div>
    )
}

export default React.memo(title)
