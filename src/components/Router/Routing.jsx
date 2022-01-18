import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import User from "../User/User";
import Rooms from "../Rooms/Rooms";
import Booking from "../Booking/Booking";

const Routing = () => {
    const [user, setUser] = useState("")

    return (
        <>
            <Routes>
                <Route path="/user" element={<User setUser={setUser} currentUser={user}/>}/>
                <Route path="/rooms" element={<Rooms currentUser={user}/>}/>
                <Route path="/bookings" element={<Booking currentUser={user}/>}/>
            </Routes>
        </>
    )
}

export default Routing;