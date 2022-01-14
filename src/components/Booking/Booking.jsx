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
                <form onSubmit={onSubmit} className="bookings__form">
                    <h2>Create new booking</h2>
                    <select name="roomId" id="">
                        {populateRooms()}
                    </select>
                    <input type="date" name="startDate" />
                    <input type="date" name="endDate" />
                    <input type="text" name="comments" />
                    <button type="submit">Submit</button>
                </form>
            </section>
        </>
    )
}

export default Booking;