import { useState } from "react"

export default function Countmain() {


    const [count, setCount] = useState(100);

    const handleUp = () => {
        setCount(count + 1);
    }

    const handleDown = () => {
        setCount(count + 1);
    }

    const handleRest = () => {
        setCount(count + 1);
    }


    return (
        <div className="crad">
            <h3>count: </h3>

            <button className="button">Increase +1</button>
            <button className="button">Decrease -1</button>
            <button>Reset</button>

        </div>
    )
}