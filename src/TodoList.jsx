import { TodoItem } from "./TodoItem"

// Component for displaying the list of todo items
export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {/* Display message if there are no todos */}
      {todos.length === 0 && "No Todos"}
      
      {/* Map over todos array and render a TodoItem for each todo */}
      {todos.map(todo => {
        return (
          <TodoItem
            {...todo} // Spread operator to pass todo properties (id, title, completed)
            key={todo.id} // Unique key for each item in the list
            toggleTodo={toggleTodo} // Function to toggle completion status
            deleteTodo={deleteTodo} // Function to delete todo item
          />
        )
      })}
    </ul>
  )
}
