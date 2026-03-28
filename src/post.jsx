import { use } from "react"

export default function Posts({ postPromise }) {

    const posts = use(postPromise)
    console.log(posts);
    return (
        <div className="crad">
            <h2>all post are here: {posts.length} </h2>
        </div>
    )
}
