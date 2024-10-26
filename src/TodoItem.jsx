// Component for rendering an individual todo item
export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return (
      <li>
        <label>
          {/* Checkbox to mark todo as completed, controlled by 'completed' prop */}
          <input
            type="checkbox"
            checked={completed} // Set checkbox based on 'completed' status
            onChange={e => toggleTodo(id, e.target.checked)} // Toggle completion status on change
          />
          {title} {/* Display the title of the todo */}
        </label>
        
        {/* Button to delete the todo item */}
        <button onClick={() => deleteTodo(id)} className="btn btn-danger">
          Delete
        </button>
      </li>
    )
  }
  