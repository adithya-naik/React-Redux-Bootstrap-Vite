import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";


function App() {
let list = [{
  name : "Remainder",
  dueDate : "10/12/24"
},{
  name : "Project",
  dueDate : "10/02/24"
},{
  name : "Excercise",
  dueDate : "10/4/24"
},{
  name : "Go to College",
  dueDate : "10/7/24"
},]

  return <center className="todo-container">
     <AppName></AppName>
     <AddTodo></AddTodo>
     <TodoItems list = {list}></TodoItems>
    </center>
}

export default App;
