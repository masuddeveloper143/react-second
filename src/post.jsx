import { use } from "react"
import Post from "./posts";

export default function Posts({ postPromise }) {

    const posts = use(postPromise);

    return (
        <div className="card">
            <h2>all post are here: {posts.length}</h2>

            {
                posts.map(post => (
                    <Post key={post.id} post={post}></Post>
                ))
            }

        </div>
    )
}