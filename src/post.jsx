import { use } from "react"
import post from "./posts";

export default function Posts({ postPromise }) {

    const posts = use(postPromise)
    console.log(posts);
    return (
        <div className="crad">
            <h2>all post are here: {posts.length} </h2>
            {
                post.map(posts => <posts posts={posts}></posts>)
            }

        </div>
    )
}
