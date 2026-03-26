import { use } from "react"

export default function Posts({ posrPromise }) {

    const posts = use(posrPromise)
    console.log(posts);
    return (
        <div className="crad">
            <h2>all post are here </h2>
        </div>
    )
}
