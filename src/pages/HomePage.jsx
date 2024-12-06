import { Link } from "react-router-dom"
const HomePage = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <Link to="/calculator"><button>Calculator</button></Link>
            <Link to= "/todolist"><button>Todo list</button></Link>
            <Link to = "/userlist"><button>User list</button></Link>
        </div>
    )
}

export default HomePage