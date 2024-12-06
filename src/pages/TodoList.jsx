import { useState } from "react"

function TodoList() {
    let [todos, setTodos] = useState([])
    
    let [todoTitle, setTodoTitle] = useState ([])
    let [description, setDesription] = useState([])

    const addTodo = () => {

        let newTodo = {
            title:title, 
            description:description,
            completed:false
        }

        let updatedTodos = [...todos, newTodo]

        setTodos(updatedTodos)
    }

/* /*     const deleteTodo = (i) => {
        let updatedTodos = todos.filter((todos.i) => {return i !== index})
        setTodos(updatedTodos);
    }

    const completedTodos = (i) => {
        let updatedTodo = [...todos];
        updatedTodos[i].completed = true;
        setTodos(updatedTodos);
    }

 */
return (
    <>
    <h1>Todolist</h1>
    <input type="text" placeholder="Titel" onChange={(event) => setTitle(event.target.value)}/>
    <input type="text" placeholder="Beskrivning" onChange={(event) => setDescription(event.target.value)}/>
    <button onClick={addTodo}>Lägg till</button>
    <ul>
      {todos.map((todo,i) => <li key={i}>
        <h2 className={todo.completed ? 'completed' : ""}>{todo.title}
          <button onClick={() => deleteTodo(i)}>Delete</button>
          <button onClick={() => completeTodo(i)}>Complete</button>
        </h2>
        <p>{!todo.completed && todo.desc}</p>
        </li>)}
    </ul>
    </>
)
}

export default TodoList