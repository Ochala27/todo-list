import "./styles.css"

export default function App() {
  return (
    <>
    <from className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input type="text" id="item" />
      </div>
      <button className="btn">Add</button>
    </from>
    <h1 className="header">Todo list</h1>
    <ul className="list">
    <li>
      <label>
        <input type="checkbox" />
        Item 1
      </label>
      <button className="btn btn-danger">Delete</button>
    </li>

    <li>
      <label>
        <input type="checkbox" />
        Item 2
      </label>
      <button className="btn btn-danger">Delete</button>
    </li>

    </ul>
    </>
  )
}