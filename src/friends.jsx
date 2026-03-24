import { use } from "react";

export default function Friends({ friendsPromise }) {

    const friends = use(friendsPromise);
    console.log(friends);

    const users = use(fetchUsers);

    return (
        <div>
            <h3>Friends: </h3>
        </div>
    )

}