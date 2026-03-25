export default function Friend({ friend }) {

    console.log(friend)
    const { name, email, phone, website } = friend;
    return (
        <div className="crad">
            <h3>Name: {name} </h3>
            <p>email: {email} </p>
            <p>Phone Number: {phone} </p>
            <p>website: <a href="#">{website}</a></p>
        </div>
    )
}