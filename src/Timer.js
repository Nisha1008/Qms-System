import React, { useState } from 'react'

const Timer = () => {
    let time = new Date().toLocaleTimeString();
    const [ctime, setcTime] = useState(time);

    const updateData = () => {

        let time = new Date().toLocaleTimeString();
        setcTime(time);
    }

    setInterval(updateData, 1000);
    return (
        <>
            {ctime}
        </>
    )
}

export default Timer
