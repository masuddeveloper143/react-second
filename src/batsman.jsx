import { useState } from "react"

export default function Batsman() {
    let [runs, setRuns] = useState(0);


    const handleSingeles = () => {
        const updatedRuns = runs + 1;
        setRuns(updatedRuns);
    }

    const handleSIx = () => {
        const updatedRuns = runs + 6;
        setRuns(updatedRuns);
    }

    const handleFour = () => {
        const updatedRuns = runs + 6;
        setRuns(updatedRuns);
    }


    {
        
    }


    return (
        <div>
            <h1>Plear: Bangla Batsman</h1>




            <h1>Score: {runs}</h1>
            <button onClick={handleSingeles}> sigeles</button>
            <button onClick={handleFour}> four</button>
            <button onClick={handleSIx}>six</button>

        </div>
    )
}