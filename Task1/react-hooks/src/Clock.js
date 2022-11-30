import React, { useEffect, useState } from "react";

const Clock = () => {
    const [date, setDate] = useState(new Date())

    const [count, setCount] = useState(0)

    function tick() {
        setTimeout(setDate(new Date()), 1000)
    }

    useEffect(() => {
        tick()
    }, [date])

    return <div>
        <h3>Hello World</h3>
        <h2>{date.toLocaleTimeString()}</h2>
        <h3>{count}</h3>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
}

export default Clock