import { useState } from "react"

// Component for adding new todo items
export function NewTodoForm({ onSubmit }) {
  // State to track the input value of the new todo item
  const [newItem, setNewItem] = useState("")

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault() // Prevents the default form submission behavior
    if (newItem === "") return // Exit if input is empty

    onSubmit(newItem) // Call the onSubmit function passed as a prop with the new item

    setNewItem("") // Clear the input field after submission
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        {/* Input field for the new todo item */}
        <input
          value={newItem}
          onChange={e => setNewItem(e.target.value)} // Update newItem state on input change
          type="text"
          id="item"
        />
      </div>
      {/* Button to add the new item */}
      <button className="btn">Add</button>
    </form>
  )
}
