import "./User.scss";

const User = (props) => {
    const {setUser} = props;

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
        setUser(event.target.value)
    }

    return (
        <>
            <div className="users">
                <h1 className="users__title">Users</h1>
                <form className="users__form" onSubmit={onSubmit}>
                    <input className="users__form-input" type="text" name="username" placeholder="Username"/>
                    <input className="users__form-input" type="email" name="email" placeholder="Email" />
                    <input className="users__form-input" type="password" name="password" placeholder="Password" />
                    <button className="users__form-submit" type="submit">Submit</button>
                </form>

                <div className="users__select">
                    <label htmlFor="user">Choose User</label>
                    <select name="user" onChange={loginUser}>
                    <option value="" disabled selected>Choose a user.</option>
                    {populateUsers()}
                    </select>  
                </div>
            </div>
        </>
    )
}

export default User;