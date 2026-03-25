export default function Friend({friend}) {

    console.log(friend)
    const {name, email} = friend;
    return (
        <div className="crad">
            <h3>Name: {name} </h3>
            <p>email: {} </p>
        </div>
    )
}