import { useState } from "react";

export default function Counter2() {


    const handleDown = () => {
        const newCountDown = count - 1;
        setCount(newCountDown);
    }

    const [count, setCount] = useState(100);


    return (
        <div className="crad">
            <h3>count: {count} </h3>
            <button onClick={handleDown}>down</button>
        </div>
    )
}