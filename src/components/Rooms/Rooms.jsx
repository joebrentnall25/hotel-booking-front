import "./Rooms.scss";

const Rooms = (props) => {
    const { currentUser } = props;

    const onSubmit = () => {

    }

    return (
        <>
            <h1>{currentUser}</h1>
            <div className="rooms">
                <form onSubmit={onSubmit} className="rooms__form">
                    <h2 className="rooms__form-title">Create new room</h2>
                    <input className="form-input" type="number" name="roomNumber" min="0" placeholder="Enter room number"/>
                    <input className="form-input" type="text" name="description" placeholder="Enter room description" />
                    <input className="form-input" type="text" name="addedBy" placeholder="Added by" />
                    <input className="form-input" type="number" name="price" placeholder="Enter base price" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}

export default Rooms;