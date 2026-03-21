
import { useState } from "react"

export default function Counter() {

    const handleAdd = () => {
        setCount(5);
    }

    const [count, setCount] = useState(0);

    const counterStyle = {
        border: '2px solid red'
    }
    return (
        <div style={counterStyle}>
            <h3>count: {count} </h3>
            <button onClick={handleAdd}>Add</button>

        </div>
    )
}