import { use } from "react"

export default function Users({ fetchUsers }) {

    const users = use(fetchUsers);
    console.log(users);

    return (
        <div>
            <h3>User: {users.lenght} </h3>
        </div>
    )

}