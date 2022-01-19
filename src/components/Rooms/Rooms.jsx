import { useEffect, useState } from "react";
import "./Rooms.scss";

const Rooms = (props) => {
    const { currentUser } = props;
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        getRooms();
    }, []);

    const onCreateRoomSubmit = (event) => {
        event.preventDefault();
        const room = {
            roomNumber: event.target.roomNumber.value,
            roomDesc: event.target.roomDesc.value,
            addedBy: event.target.addedBy.value,
            basePrice: event.target.price.value,
        };
        fetch("http://localhost:8080/rooms", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(room),
        })
            // Use then to retrieve rooms after POST
            .then(() => {
                event.target.roomNumber.value = "";
                event.target.roomDesc.value = "";
                event.target.addedBy.value = "";
                event.target.price.value = "";
                getRooms();
            })
            .catch((err) => console.log(err));
    };

    const deleteRoom = (id) => {
        fetch(`http://localhost:8080/rooms/${id}`, {
            method: "DELETE",
        })
            .then(getRooms())
            .catch((err) => console.log(err));
    };

    const populateRooms = rooms.map((room, i) => (
        <div key={i} className="rooms__display-item">
            <h3>Room: {room.roomNumber}</h3>
            <p>{room.roomDesc}</p>
            <p>£{room.basePrice}</p>
            <button onClick={()=>deleteRoom(room.id)}>Remove</button>
        </div>
    ));

    const getRooms = () => {
        fetch("http://localhost:8080/rooms")
            .then((response) => response.json())
            .then((data) => setRooms(data))
            .then(console.log(rooms))
            .catch((error) => console.log(error));
    };

    return (
        <>
            <div className="rooms">
                <p>
                    {currentUser.username !== undefined
                        ? `Currently logged in as ${currentUser.username}`
                        : "Please login on the user page"}
                </p>
                <form onSubmit={onCreateRoomSubmit} className="rooms__form">
                    <h2 className="rooms__form-title">Create new room</h2>
                    <input
                        required
                        className="form-input"
                        type="number"
                        name="roomNumber"
                        min="0"
                        placeholder="Enter room number"
                    />
                    <input
                        required
                        className="form-input"
                        type="text"
                        name="roomDesc"
                        placeholder="Enter room description"
                    />
                    <input
                        required
                        className="form-input"
                        type="text"
                        name="addedBy"
                        placeholder="Added by"
                    />
                    <input
                        required
                        className="form-input"
                        type="number"
                        name="price"
                        placeholder="Enter base price"
                    />
                    <button className="form-submit" type="submit">
                        Submit
                    </button>
                </form>
                <div className="rooms__display">{populateRooms}</div>
            </div>
        </>
    );
};

export default Rooms;
