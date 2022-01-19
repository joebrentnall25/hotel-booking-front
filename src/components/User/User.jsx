import "./User.scss";
import "../../assets/styles/layout/forms.scss"
import { useEffect, useState } from "react";

const User = (props) => {
    const {setUser, currentUser} = props;
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    },[])

    const onSubmit = (event) => {
        event.preventDefault();
        const user = {
            username: event.target.username.value,
            email: event.target.email.value,
            password: event.target.password.value
        }
        fetch('http://localhost:8080/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(getUsers())
        .catch(err => console.log(err))
    }

    const populateUsers = users.map((user, i) => (
            <option key={i} value={i}>{user.username}</option>
        ));

    const getUsers = () => {
        fetch("http://localhost:8080/users")
            .then(response => response.json())
            .then(data => {
                setUsers(data);
            })
            .catch(error => console.log(error))
    }

    const loginUser = (event) => {
        const userObject = users[event.target.value];
        setUser(userObject)
        console.log(currentUser)
    }

    return (
        <>
            <div className="users">
                <p>{currentUser.username !== undefined ? `Currently logged in as ${currentUser.username}` : "Please login below"}</p>
                <form className="users__form" onSubmit={onSubmit}>
                    <h2 className="users__form-title">Create a new user</h2>
                    <input className="users__form-input form-input" type="text" name="username" placeholder="Username"/>
                    <input className="users__form-input form-input" type="email" name="email" placeholder="Email"/>
                    <input className="users__form-input form-input" type="password" name="password" placeholder="Password" />
                    <button className="users__form-submit form-submit" type="submit">Submit</button>
                </form>

                <div className="users__select">
                    <h2 className="users__select-title">Select existing user</h2>
                    <select defaultValue="default" className="form-input" name="user" onChange={loginUser}>
                    <option value="default" disabled>Choose a user.</option>
                    {populateUsers}
                    </select>  
                </div>
            </div>
        </>
    )
}

export default User;