import { use } from "react";

export default function Friends({ friendsPromise }) {

    const friends = use(friendsPromise);

    const users = use(fetchUsers);

    return (
        <div>
            <h3>Friends: </h3>
        </div>
    )

}