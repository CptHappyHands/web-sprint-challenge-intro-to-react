import React, { useState } from 'react'

const Toggle = () => {
    
    
    const [open, setOpen] = useState(false)
    
    return (
        <div className={open ? "open" : null}>
            <button onClick={() => {
                setOpen(!open);
            }}
            ></button>
        </div>
    )
    
}
    
export default Toggle