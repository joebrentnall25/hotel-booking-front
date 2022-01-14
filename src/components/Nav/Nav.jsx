import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="nav">
            <div className="nav__links">
                <ul className="nav__links-list">
                    <li className="nav__links-list-item"><Link className="nav__links-list-item-a" to="/user">User</Link></li>
                    <li className="nav__links-list-item"><Link className="nav__links-list-item-a" to="/rooms">Rooms</Link></li>
                    <li className="nav__links-list-item"><Link className="nav__links-list-item-a" to="/bookings">Booking</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;