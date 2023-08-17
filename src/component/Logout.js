import React from 'react'
import { useState } from 'react'
const Logout = () => {
    const [name, setName] = useState("nisha");
    return (
        <>
            <h3 style={{}}>Hi, {name}
            </h3>
            <button type="submit" className='btn-sub'>Log Out</button>

        </>
    )
}

export default Logout
