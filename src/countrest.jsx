import { useState } from "react";

export default function Counter3() {


    const handleDownRest = () => {
    
        setCount(0);
    }

    const [count, setCount] = useState(100);


    return (
        <div className="crad">
            <h3>count: {count} </h3>
            <button onClick={handleDownRest}>clear</button>
        </div>
    )
}