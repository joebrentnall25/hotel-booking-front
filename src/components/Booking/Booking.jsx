import "./Booking.scss";

const Booking = (props) => {
    const { currentUser } = props; 
    const rooms = [
        {
            id: 0,
            roomNumber: 1,
            description: "Small Room with balcony",
            addedBy: "Fred",
            price: "99"
        },
        {
            id: 1,
            roomNumber: 2,
            description: "Large Room with balcony",
            addedBy: "George",
            price: "120"
        }
    ]

    const populateRooms = () => {
        return rooms.map((room, i) => (
            <option key={i} value={room.id}>{room.id}</option>
        ));
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const booking = {
            roomId: event.target.roomId.value,
            startDate: event.target.startDate.value,
            endDate: event.target.endDate.value,
            comments: event.target.comments.value
        }
        console.log(booking);
    }

    return (
        <>
            <section className="bookings">
            <p>{currentUser.username !== undefined ? `Currently logged in as ${currentUser.username}` : "Please login on the user page"}</p>
                <form onSubmit={onSubmit} className="bookings__form">
                    <h2>Create new booking</h2>
                    <select className="form-input" name="roomId" id="" defaultValue="default">
                        <option value="defualt" disabled>Please select a room</option>
                        {populateRooms()}
                    </select>
                    <input className="form-input" type="date" name="startDate" />
                    <input className="form-input" type="date" name="endDate" />
                    <input className="form-input" type="text" name="comments" placeholder="comments"/>
                    <button className="form-submit" type="submit">Submit</button>
                </form>
            </section>
        </>
    )
}

export default Booking;