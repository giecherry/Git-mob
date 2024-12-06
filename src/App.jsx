import './App.css'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Calculator from "./pages/Calculator"
import TodoList from "./pages/TodoList"
import UserList from "./pages/UserList"

function App() {

  return (
    <>
      <h1>Git mob</h1>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/calculator" element={<Calculator/>}/>
        <Route path="/todolist" element={<TodoList/>}/>
        <Route path="/userlist" element={<UserList/>}/>
      </Routes>
    </>
  )
}

export default App
