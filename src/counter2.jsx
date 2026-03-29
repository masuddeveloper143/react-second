import { useState } from "react";

export default function Counter2() {


    const handleDown = () => {
        
        setCount(0);
    }

    const [count, setCount] = useState(100);


    return (
        <div className="crad">
            <h3>count: {count} </h3>
            <button onClick={handleDown}>down</button>
        </div>
    )
}