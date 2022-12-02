import { useState } from "react"

export function App() {
    const [count, setCount] = useState(0)

    function clickHandler() {
        setCount(count + 1)
    }

    return (
        <div>
            Hello World!
            <div>
                <button onClick={clickHandler}>Click to increase</button>
                <div>{count}</div>
            </div>
        </div>
    )
}
