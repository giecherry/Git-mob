import { useState } from "react"
const UserList = () => {
    const [users, setUsers] = useState([])

    const getUsers = async () => {
        const response = await fetch('https://randomuser.me/api?results=100')
        const data = await response.json()
        setUsers(data.results)
    }
    return (
        <div>
            <h1>User List</h1>
            <div className="filters" style={{ display: "flex", gap: "0.5rem", alignItems: "center"}}>
                <label htmlFor="filterGender">Gender: </label>
                <select name="filterGender" id="filterGender">
                    <option value="all">All</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <label htmlFor="filterAge">Age range: </label>
                <select name="filterAge" id="filterAge">
                    <option value="all">All</option>
                    <option value="under25">Under 25</option>
                    <option value="over25">Over 25</option>
                    <option value="over35">Over 35</option>
                    <option value="over45">Over 45</option>
                    <option value="over55">Over 55</option>
                    <option value="over65">Over 65</option>
                    <option value="over75">Over 75</option>
                </select>
                <button>Filter</button>
                <button onClick={getUsers}>Show All Users</button>
            </div>
            <div className="userList" style={{ border: "2px solid lightgray", display: "flex", flexDirection: "column", flexWrap: "wrap", maxHeight: "500px",overflowY: "scroll", borderRadius: "15px"}}>
                <ul style={{listStyle: "none"}}>
                {users.map(user => (
                    <li key={user.login.username}>
                        <div className="userCard" style={{ display: "flex", flexDirection: "row", border: "1px solid black", margin: "0.3rem", padding: "0.3rem", borderRadius: "15px", fontSize: "0.4rem"}}>
                            <div className="userText" style= {{alignItems: "center"}}>
                                <p> <strong>Username: </strong>{user.login.username}</p>
                                <p> <strong>Full Name: </strong> {user.name.first} {user.name.last}</p>
                                <p><strong>Gender: </strong> {user.gender}</p>
                                <p><strong>Age: </strong>{user.dob.age}</p>
                                <p><strong>Location: </strong> {user.location.city}, {user.location.country}</p>
                            </div>
                            <div style={{display: "flex", justifyContent: "right"}}>
                            <img src={user.picture.large} alt={user.name.first}style={{width: "200px", height: "200px", borderRadius: "50%"}}/>
                            </div>
                        </div>
                        
                    </li>
                ))}
            </ul>
            </div>
            
        </div>
    )
}

export default UserList