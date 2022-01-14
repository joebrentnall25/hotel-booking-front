import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import User from "../User/User";
import Rooms from "../Rooms/Rooms";

const Routing = () => {
    const [user, setUser] = useState("")

    return (
        <>
            <Routes>
                <Route path="/user" element={<User setUser={setUser}/>}/>
                <Route path="/rooms" element={<Rooms currentUser={user}/>}/>
                <Route path="/booking" element={<Rooms currentUser={user}/>}/>
            </Routes>
        </>
    )
}

export default Routing;