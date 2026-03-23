import { useState } from "react"

export default function Batsman() {
    const [runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0);



    const handleSingeles = () => {
        const updatedRuns = runs + 1;
        setRuns(updatedRuns);
    }

    const handleSIx = () => {
        const updatedRuns = runs + 6;
        const updatedSixs = sixes + 1;
        setSixes(updatedSixs);
        setRuns(updatedRuns);
    }

    const handleFour = () => {
        const updatedRuns = runs + 6;
        setRuns(updatedRuns);
    }





    return (
        <div>
            <h1>Plear: Bangla Batsman</h1>
            <p><small>Six: {sixes} </small></p>


            {
                runs > 50 && <p>your scroe: 50</p>
            }

            <h1>Score: {runs}</h1>
            <button onClick={handleSingeles}> sigeles</button>
            <button onClick={handleFour}> four</button>
            <button onClick={handleSIx}>six</button>

        </div>
    )
}