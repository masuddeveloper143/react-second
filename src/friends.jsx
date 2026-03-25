import { use } from "react";
import Friend from "./friend";

export default function Friends({ friendsPromise }) {

    const Friends = use(friendsPromise);
    console.log(Friends)


    return (
        <div className="crad">
            <h3>Friends:  {Friends.length} </h3>
            {
                Friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )

}

