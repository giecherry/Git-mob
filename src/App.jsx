import './App.css'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'

function App() {

  return (
    <>
      <h1>Git mob</h1>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </>
  )
}

export default App
