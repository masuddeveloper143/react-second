import { useState } from "react";



export default function Counter() {

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    const [count, setCount] = useState(0);

    
    return (
        <div className="crad">
            <h3>count: {count} </h3>
            <button onClick={handleAdd}>Add</button>

        </div>
    )
}