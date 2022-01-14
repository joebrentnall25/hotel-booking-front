import React from "react";
import { Routes, Route } from "react-router-dom";

const Routing = () => {
    return (
        <Routes>
            <Route path="/user" component={<h1>User</h1>}/>
            <Route path="/rooms" component={<h1>Rooms</h1>}/>
            <Route path="/booking" component={<h1>Bookings</h1>}/>
        </Routes>
    )
}

export default Routing;