import React, { useState } from 'react'

function TodosApp() {
    const [Todos, setTodos] = useState(["workout", "running", "practice"]);
  return (
    <div>
        <h3>Todo small app</h3>
        <ul>
            {Todos.map((todo, index)=>(
              <li key={index}>{todo}</li>
            ))}
        </ul>
        {Todos.length === 0 && <p>No Have ToDo Now</p>}
    </div>
  )
}

export default TodosApp