
import "./App.css";
import TodoApp from "./components/TodoApp";

function App() {
  

  return (
    <>
      <div className="header">
        {" "}
        <h2> Getting things done: The To-Do List</h2>
        <input type="text" className="myInput" placeholder="title"></input>
        <button onClick="newElement()" className="addBtn">
          Add Task
        </button>
      </div>
      


      <div className="main-container">
       <ul className="myUL">
  <li>Hit the gym</li>
  <li className="checked">Pay bills</li>
  <li>Meet George</li>
  <li>Buy eggs</li>
  <li>Read a book</li>
  <li>Organize office</li>
</ul>


      </div>
     

    </>
  );
}

export default App;
