import "./User.scss";
import "../../assets/styles/layout/forms.scss"
import { useState } from "react";

const User = (props) => {
    const {setUser} = props;
    const [currentUser, setCurrentUser] = useState("");

    const users = [
        {
            name: "Joe",
            email: "joe.brentnall25@gmail.com",
        },
        {
            name: "Myles",
            email: "myles@somewhere.com"
        }
    ]

    const onSubmit = () => {
        
    }

    const populateUsers = () => {
        return users.map((user, i) => (
            <option key={i} value={user.name}>{user.name}</option>
        ));
    }

    const loginUser = (event) => {
        setCurrentUser(event.target.value)
        setUser(event.target.value)
        console.log(currentUser)
    }

    return (
        <>
            <div className="users">
                <p>{currentUser !== "" ? `Currently logged in as ${currentUser}` : "Please login below"}</p>
                <form className="users__form" onSubmit={onSubmit}>
                    <h2 className="users__form-title">Create a new user</h2>
                    <input className="users__form-input form-input" type="text" name="username" placeholder="Username"/>
                    <input className="users__form-input form-input" type="email" name="email" placeholder="Email" />
                    <input className="users__form-input form-input" type="password" name="password" placeholder="Password" />
                    <button className="users__form-submit form-submit" type="submit">Submit</button>
                </form>

                <div className="users__select">
                    <h2 className="users__select-title">Select existing user</h2>
                    <select defaultValue="default" className="form-input" name="user" onChange={loginUser}>
                    <option value="default" disabled>Choose a user.</option>
                    {populateUsers()}
                    </select>  
                </div>
            </div>
        </>
    )
}

export default User;