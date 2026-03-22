import { useState } from "react"

export default function Batsman() {
    const [runs, serRuns] = useState(0);
    return (
        <div>
            <h1>Plear: Bangla Batsman</h1>
            <h1>Score: {runs}</h1>
        </div>
    )
}